# Sample project end-to-end (e2e) tests.
The architecture of this project is described below:
The Sample project e2e tests are written using Protractor, the official test
framework for e2e testing of AngularJS applications.
This test project tries to follow the best practices described in
the Protractor's official website.
* The `protractor.conf.js` file stores all the configuration needed he browser
that the tests will be executed in, the base url from where the tests will start
from, etc.
* There is also a `helper.js` file for general functions that can be used in the
tests, like sleeping for some seconds, refreshing the page, waiting for element
visibility, etc.
* The `page-objects` directory contains the web elements and functions for
specific pages or parts of the pages. This is done this way for better
maintenance and for separation of responsibilities.
*  And the **specs** directory contains the tests, where each test
suite is a separate spec file. Each spec file has a describe secti
on, which basically describes the functionality being tested (and
it names the test suite), and there is an it section for each of t
he different test cases.
  ## Local installation:
  For installing protractor locally, follow the below steps:
  npm install protractor -g
  webdriver-manager update

  ## Running protractor:
  For running protractor just execute the below grunt tasks.
  grunt server:e2e // run this in one console's tag grunt test:protractor
  // run this in another in console's tab

  ## Tips:
  Protractor uses Jasmine syntax, so:
  * if you need to run only a specific test case, change the 'it' for 'fit'
  * if you want to skip a specific test case, change the 'if' for 'xit'
  * if you want to run only a specific test suite, change the 'describe' for
  'fdescribe'

  Also:
  * for running protractor against your local environment, make a copy of the
  config.local.example.js file, but change the name to config.local.js (this
  will be ignored by git). With this file, some not important configurations
  (for running on local) are overwritten. You can also edit this config local
  file for overwritten other c onfigurations you might need (e.g: baseUrl).
  For more information, take a look at the Protractor's official doc
  umentation [http://www.protractortest.org/#/](http://www.protractortest.org/#/).
