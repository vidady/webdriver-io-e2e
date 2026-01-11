import { join } from 'path';
import { config as sharedConfig } from './wdio.shared.conf.js';
import { log } from 'console';

// ====================
// Runner Configuration
// ====================
sharedConfig.port = 4723;

// ============
// Specs
// ============
sharedConfig.specs = [
  join(process.cwd(), './test/specs/android/**/webview*.js')
];

// ============
// Capabilities
// ============
sharedConfig.capabilities = [
  // {
  //   platformName: 'Android',
  //   'appium:deviceName': 'Android 16',
  //   'appium:platformVersion': '16.0',
  //   'appium:automationName': 'UiAutomator2',
  //   'appium:app': join(process.cwd(), 'app/android/ApiDemos-debug.apk')
  // },

  {
    "appium:platformName": "Android",
    "appium:deviceName": "Android 16",
    "appium:platformVersion": "16.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": join(process.cwd(), "app/android/ColorNote-Notepad.apk"),
    "appium:autoGrantPermissions": true,
    'appium:chromedriverAutodownload': true


  }
];

// ============
// Test runner services
// ============
sharedConfig.services = [['appium', {
  args: {
    relaxedSecurity: true
  },
  logPath: './'
}]];


// 🔑 Export as a **named export**
export const config = sharedConfig;