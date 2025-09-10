exports.config = {
  runner: "local",
  specs: ["./test/specs/**/*.spec.js"],
  maxInstances: 1,
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "emulator-5554",
      "appium:platformVersion": "11.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": process.cwd() + "/app/android.wdio.native.app.v1.0.8.apk",
    },
  ],
  logLevel: "info",
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  services: ["appium"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
