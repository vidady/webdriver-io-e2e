import dotenv from 'dotenv';
import path from 'path';
import { config } from './wdio.shared.conf.js';

dotenv.config();

// ============
// BrowserStack Credentials
// ============
config.user = 'vivek589';
config.key = '89svysgYDv7VqST5tUcP';

// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/android/**/webview*.js')
];

// ============
// Capabilities
// ============
config.capabilities = [{
  'bstack:options': {
    "deviceName": "Google Pixel 5",
    "platformVersion": "11.0",
    "platformName": "android",

  }
}
];

// ============
// Test runner services
// ============
config.services = [['browserstack', {
  "app": "bs://26f7ecb50e038fc2859e7b458705936e20a9c8e8",
  "autoGrantPermissions": true,
  testObservability: true,
  testObservabilityOptions: {
    projectName: "webdriverio-e2e-project",
    buildName: "android-webview-build-1",
    logs: './logs/bstack-wdio-service.log'

  },
  browserstackLocal: true
}]];

const _config = config;
export { _config as config };