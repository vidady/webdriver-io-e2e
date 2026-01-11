import { join } from 'path';
import { config as sharedConfig } from './wdio.shared.conf.js';

// ====================
// Runner Configuration
// ====================
sharedConfig.port = 4723;

// ============
// Specs
// ============
sharedConfig.specs = [
  join(process.cwd(), './test/specs/ios/webview*.js')
];

// ============
// Capabilities
// ============
sharedConfig.capabilities = [
  {
    platformName: 'iOS',
    'appium:platformVersion': '16.0',
    'appium:deviceName': 'iPhone 14 Pro',
    'appium:automationName': 'XCUITest',
    'appium:app': join(process.cwd(), 'app/ios/wdioNativeDemoApp.app'),
  }
];

// ============
// Test runner services
// ============
sharedConfig.services = ['appium'];

// ✅ Export as a named export (required by WDIO)
export const config = sharedConfig;