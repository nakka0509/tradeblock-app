import Foundation
import Capacitor
import StoreKit

@objc(StoreKitPlugin)
public class StoreKitPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "StoreKitPlugin"
    public let jsName = "StoreKit"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getProducts", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "purchase", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "restorePurchases", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getSubscriptionStatus", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openSubscriptionManagement", returnType: CAPPluginReturnPromise)
    ]

    // Product IDs
    private let unlockProductId = "com.shota.tradeblock.unlock"
    private let premiumMonthlyId = "com.shota.tradeblock.premium.monthly"
    private let premiumAnnualId = "com.shota.tradeblock.premium.annual"

    // MARK: - Get Products

    @objc func getProducts(_ call: CAPPluginCall) {
        Task {
            do {
                let productIds: Set<String> = [unlockProductId, premiumMonthlyId, premiumAnnualId]
                let products = try await Product.products(for: productIds)

                var result: [[String: Any]] = []
                for product in products {
                    result.append([
                        "id": product.id,
                        "displayName": product.displayName,
                        "displayPrice": product.displayPrice,
                        "price": NSDecimalNumber(decimal: product.price).doubleValue,
                        "type": product.type == .consumable ? "consumable" : "autoRenewable"
                    ])
                }

                call.resolve(["products": result])
            } catch {
                call.reject("Failed to fetch products: \(error.localizedDescription)")
            }
        }
    }

    // MARK: - Purchase

    @objc func purchase(_ call: CAPPluginCall) {
        guard let productId = call.getString("productId") else {
            call.reject("Missing productId")
            return
        }

        Task {
            do {
                let products = try await Product.products(for: [productId])
                guard let product = products.first else {
                    call.reject("Product not found")
                    return
                }

                let result = try await product.purchase()

                switch result {
                case .success(let verification):
                    let transaction = try checkVerified(verification)
                    await transaction.finish()

                    call.resolve([
                        "success": true,
                        "productId": product.id,
                        "transactionId": String(transaction.id)
                    ])

                case .userCancelled:
                    call.resolve(["success": false, "cancelled": true])

                case .pending:
                    call.resolve(["success": false, "pending": true])

                @unknown default:
                    call.reject("Unknown purchase result")
                }
            } catch {
                call.reject("Purchase failed: \(error.localizedDescription)")
            }
        }
    }

    // MARK: - Restore Purchases

    @objc func restorePurchases(_ call: CAPPluginCall) {
        Task {
            var restored = false

            // Check for active subscription
            for await result in Transaction.currentEntitlements {
                if let transaction = try? checkVerified(result) {
                    if transaction.productID == premiumMonthlyId || transaction.productID == premiumAnnualId {
                        restored = true
                    }
                    await transaction.finish()
                }
            }

            call.resolve(["restored": restored])
        }
    }

    // MARK: - Get Subscription Status

    @objc func getSubscriptionStatus(_ call: CAPPluginCall) {
        Task {
            var isPremium = false

            for await result in Transaction.currentEntitlements {
                if let transaction = try? checkVerified(result) {
                    if transaction.productID == premiumMonthlyId || transaction.productID == premiumAnnualId {
                        isPremium = true
                    }
                }
            }

            call.resolve(["isPremium": isPremium])
        }
    }

    // MARK: - Open Subscription Management

    @objc func openSubscriptionManagement(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            if let scene = UIApplication.shared.connectedScenes.first as? UIWindowScene {
                Task {
                    try? await AppStore.showManageSubscriptions(in: scene)
                }
            }
        }
        call.resolve()
    }

    // MARK: - Helpers

    private func checkVerified<T>(_ result: VerificationResult<T>) throws -> T {
        switch result {
        case .unverified(_, let error):
            throw error
        case .verified(let safe):
            return safe
        }
    }
}
