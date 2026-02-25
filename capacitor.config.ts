import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.tradeblock.app',
    appName: 'Trade Block',
    webDir: 'www',
    server: {
        androidScheme: 'https'
    }
};

export default config;
