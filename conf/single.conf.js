exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  beforeSuite: function (suite) { 
    // console.log("before: " , suite.fullName) 
    // console.log("before title: ", suite.title) 
    
console.log(browser.getSession()['webdriver.remote.sessionid'])

    },
  
  reporters: ['browserstack'],
    reporterOptions: {
        browserstack: {
            outputDir: './'
        }
    },

  updateJob: false,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  plugins: { 
    'wdio-screenshot': {}
  },

  capabilities: [{
    os: 'OS X',
    os_version: 'Mojave',
    browserName: 'Safari',
    browser_version: '12.0',
    // os: 'Windows',
    // os_version: '10',
    // browserName: 'chrome',
    // browser_version: '70.0',
//     os_version : '9.0',
// device : 'Google Pixel 3 XL',
// real_mobile : 'true',
// 'browserstack.appium_version' : '1.7.1',
//     os_version : '11.0',
// device : 'iPhone X',
// real_mobile : 'true',
// 'browserstack.local' : 'true',
// 'browserstack.networkLogs' : 'true',
name: 'single_test',
    build: 'webdriver-browserstack'
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',
  
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}
