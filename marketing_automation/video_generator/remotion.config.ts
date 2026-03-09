/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";

import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig((currentConfiguration) => {
    return {
        ...currentConfiguration,
        resolve: {
            ...currentConfiguration.resolve,
            fallback: {
                ...currentConfiguration.resolve?.fallback,
                "url": require.resolve("url/"),
                "buffer": require.resolve("buffer/"),
                "stream": require.resolve("stream-browserify"),
                "vm": require.resolve("vm-browserify"),
                "string_decoder": require.resolve("string_decoder/"),
            },
        },
    };
});
