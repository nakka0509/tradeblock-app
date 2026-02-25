#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(ScreenTimePlugin, "ScreenTime",
           CAP_PLUGIN_METHOD(requestAuthorization, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(showAppPicker, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(blockApps, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(unblockApps, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(getStatus, CAPPluginReturnPromise);
)
