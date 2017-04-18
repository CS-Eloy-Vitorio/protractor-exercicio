 // protractor.conf.js
var SpecReporter = require('jasmine-spec-reporter');

  module.exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
       'browserName': 'chrome'
    },
    specs: ['specs/*.spec.js'],
    //baseUrl: 'http://www.protractortest.org/'
    onPrepare: function() {
      jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
   }    
  };
