var browserstack = require('browserstack-local');

exports.config = {
  user: 'amitpunjabi2',
  key: 'zCvMKEHo7cdgsCFqwXMs',

  updateJob: false,
  specs: [
    './tests/specs/local_test.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'chrome',
    name: 'local_test',
    build: 'webdriver-browserstack',
    'browserstack.local': true
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
  },

  // Code to start browserstack local before start of test
  onPrepare: function (config, capabilities) {
    // console.log("Connecting local");
    // return new Promise(function(resolve, reject){
    //   exports.bs_local = new browserstack.Local();
    //   exports.bs_local.start({'key': exports.config.key, 'forcelocal': true }, function(error) { 
    //       console.log(error) 
    //     if (error) return reject(error);
    //     console.log('Connected. Now testing...');

    //     resolve();
    //   });
    // });
    console.log("Connecting local"); 
    return new Promise(function(resolve, reject){ 
      exports.bs_local = new browserstack.Local(); 
      exports.bs_local.start({'key': exports.config.key, 'forcelocal': true, 'verbose': 'true'  }, function(error) { 
        console.log(error) 
      if (error) return reject(error); 
      console.log('Connected. Now testing...'); 
      resolve(); 
}); 
}); 
  },

  // Code to stop browserstack local after end of test
  onComplete: function (capabilties, specs) {
    exports.bs_local.stop(function() {});
  }
}
