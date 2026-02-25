import Foundation
import Capacitor
import FamilyControls
import ManagedSettings

@available(iOS 16.0, *)
@objc(ScreenTimePlugin)
public class ScreenTimePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ScreenTimePlugin"
    public let jsName = "ScreenTime"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "requestAuthorization", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "showAppPicker", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "blockApps", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "unblockApps", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getStatus", returnType: CAPPluginReturnPromise)
    ]

    private let store = ManagedSettingsStore()

    // MARK: - Request Authorization

    @objc func requestAuthorization(_ call: CAPPluginCall) {
        Task {
            do {
                try await AuthorizationCenter.shared.requestAuthorization(for: .individual)
                call.resolve(["authorized": true])
            } catch {
                call.resolve(["authorized": false, "error": error.localizedDescription])
            }
        }
    }

    // MARK: - Show App Picker

    @objc func showAppPicker(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            guard let viewController = self.bridge?.viewController else {
                call.reject("No view controller available")
                return
            }

            let pickerVC = AppPickerHostingController { selection in
                // Save selection to UserDefaults via App Group
                ScreenTimeDataStore.shared.selection = selection
                call.resolve([
                    "selected": true,
                    "appCount": selection.applicationTokens.count,
                    "categoryCount": selection.categoryTokens.count
                ])
            } onCancel: {
                call.resolve(["selected": false])
            }

            pickerVC.modalPresentationStyle = .formSheet
            viewController.present(pickerVC, animated: true)
        }
    }

    // MARK: - Block Apps

    @objc func blockApps(_ call: CAPPluginCall) {
        let selection = ScreenTimeDataStore.shared.selection

        guard !selection.applicationTokens.isEmpty || !selection.categoryTokens.isEmpty else {
            call.reject("No apps selected. Please select apps to block first.")
            return
        }

        // Apply shield to selected apps
        store.shield.applications = selection.applicationTokens.isEmpty ? nil : selection.applicationTokens
        store.shield.applicationCategories = selection.categoryTokens.isEmpty
            ? nil
            : ShieldSettings.ActivityCategoryPolicy.specific(selection.categoryTokens)
        store.shield.webDomains = selection.webDomainTokens.isEmpty ? nil : selection.webDomainTokens

        call.resolve(["blocked": true])
    }

    // MARK: - Unblock Apps

    @objc func unblockApps(_ call: CAPPluginCall) {
        store.shield.applications = nil
        store.shield.applicationCategories = nil
        store.shield.webDomains = nil

        call.resolve(["unblocked": true])
    }

    // MARK: - Get Status

    @objc func getStatus(_ call: CAPPluginCall) {
        let selection = ScreenTimeDataStore.shared.selection
        let isBlocking = store.shield.applications != nil || store.shield.applicationCategories != nil

        call.resolve([
            "authorized": AuthorizationCenter.shared.authorizationStatus == .approved,
            "isBlocking": isBlocking,
            "selectedAppCount": selection.applicationTokens.count,
            "selectedCategoryCount": selection.categoryTokens.count
        ])
    }
}

// MARK: - Data Store (UserDefaults)

@available(iOS 16.0, *)
class ScreenTimeDataStore {
    static let shared = ScreenTimeDataStore()

    private let defaults = UserDefaults.standard
    private let selectionKey = "screentime_selection"

    var selection: FamilyActivitySelection {
        get {
            guard let data = defaults.data(forKey: selectionKey),
                  let selection = try? JSONDecoder().decode(FamilyActivitySelection.self, from: data) else {
                return FamilyActivitySelection()
            }
            return selection
        }
        set {
            if let data = try? JSONEncoder().encode(newValue) {
                defaults.set(data, forKey: selectionKey)
            }
        }
    }
}
