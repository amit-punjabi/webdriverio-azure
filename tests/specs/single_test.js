var assert = require('assert');

var request = require("request");

var session = browser.sessionId;
request({uri: "https://amitpunjabi2:Mb6R9PKpdrnkxxK3GMNE@api.browserstack.com/automate/sessions/" + session + ".json", method:"PUT", form:{"name":"suite.fullName"}})

describe('Google\'s Search Functionality', function() {
//   it('should change timeout duration for session with long code duration', () => {
//     browser.setTimeout({
//         'pageLoad': 10000,
//         'script': 60000
//     });
//     // Execute code which takes a long time
//     browser.executeAsync((done) => {
//         console.log('Wake me up before you go!');
//         setTimeout(done, 59000);
//     });
// });
  it('can find search results', function () {
    browser
    // .getWindowSize()
    .url('https://www.google.com/ncr')
    // const abc = browser.getWindowSize()
  //   .execute(
  //     'return window.data;'
  // );
    // var elem = browser.element('body')
    // elem.isVisible()
    // browser
    // .execute(function(){
    //   'return (() => { return document.title; }).apply(null, arguments)'
    // })
    // const options = {

    //   cmd: 'Page.captureScreenshot',
  
    //   params: {
  
    //     format: 'png',
  
    //     clip: {
  
    //       x: 0,
  
    //       y: 0,
  
    //       width,
  
    //       height,
  
    //       scale: 1.0
  
    //     }
  
    //   }
  
    // }
  //   .setValue('*[name="q"]','BrowserStack\n')
  //   .pause(5000);
  
  // assert(browser.getTitle().match(/Google/i));
  });
//   it('should inject javascript on the page', () => {
//     const result = browser.execute('return (() => { return document.title; }).apply(null, arguments)')
//     // node.js context - client and console are available
//     console.log(result) // outputs: 10
// });
});


