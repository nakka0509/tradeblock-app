import SwiftUI
import FamilyControls

@available(iOS 16.0, *)
class AppPickerHostingController: UIHostingController<AppPickerView> {

    init(onSelection: @escaping (FamilyActivitySelection) -> Void, onCancel: @escaping () -> Void) {
        let view = AppPickerView(onSelection: onSelection, onCancel: onCancel)
        super.init(rootView: view)
    }

    @MainActor required dynamic init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

@available(iOS 16.0, *)
struct AppPickerView: View {
    @Environment(\.presentationMode) var presentationMode
    @State private var selection = ScreenTimeDataStore.shared.selection
    let onSelection: (FamilyActivitySelection) -> Void
    let onCancel: () -> Void

    var body: some View {
        NavigationView {
            VStack(spacing: 0) {
                // Header
                VStack(spacing: 8) {
                    Image(systemName: "lock.shield.fill")
                        .font(.system(size: 50))
                        .foregroundColor(.blue)
                    Text("ブロックするアプリを選択")
                        .font(.title2)
                        .fontWeight(.black)
                    Text("ロック中、選択したアプリは開けなくなります")
                        .font(.caption)
                        .foregroundColor(.secondary)
                        .multilineTextAlignment(.center)
                }
                .padding(.vertical, 20)

                // Apple's FamilyActivityPicker
                FamilyActivityPicker(selection: $selection)
                    .ignoresSafeArea()
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("キャンセル") {
                        onCancel()
                        presentationMode.wrappedValue.dismiss()
                    }
                }
                ToolbarItem(placement: .confirmationAction) {
                    Button("完了") {
                        ScreenTimeDataStore.shared.selection = selection
                        onSelection(selection)
                        presentationMode.wrappedValue.dismiss()
                    }
                    .fontWeight(.bold)
                }
            }
        }
    }
}
