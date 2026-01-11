import dotenv from 'dotenv';
import path from 'path';
import { config } from './wdio.shared.conf.js';
import { log } from 'console';

dotenv.config();

// ============
// BrowserStack Credentials
// ============
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;

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
}],[
        'eslinter',
        {
            runnerType: 'unresolved'
        }
    ]];

const _config = config;
export { _config as config };