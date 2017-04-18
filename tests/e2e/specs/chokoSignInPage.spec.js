var ChokoSignInPage = require('/Users/eloyvitorio/Documents/Projeto-teste-protractor/tests/e2e/page-objects/chokoSignInPage.po.js');
var MessageWrapper = require('/Users/eloyvitorio/Documents/Projeto-teste-protractor/tests/e2e/page-objects/chokoMessagesWrapper.po.js');
var Helper = require('/Users/eloyvitorio/Documents/Projeto-teste-protractor/tests/e2e/helper.js');

describe('Chock SignIn Page', function() {
  var chokoSignInPage = new ChokoSignInPage();
  var helper = new Helper();
  var messageWrapper = new MessageWrapper();
  var randomName = helper.generateRandomString();
  var randomPassword = helper.generateRandomString();

  beforeEach(function(){
    chokoSignInPage.visit();
  });

  it('try login with user and password invalids', function() {
    chokoSignInPage.fillUserNameField(randomName);
    chokoSignInPage.fillUserPasswordField(randomPassword);
    chokoSignInPage.clickSignInButton();
    expect(messageWrapper.errorMessage.getText()).toContain('Invalid username or password.');
 });
});
