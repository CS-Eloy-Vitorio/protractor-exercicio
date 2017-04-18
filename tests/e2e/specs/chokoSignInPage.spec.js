var ChokoSignInPage = require('../page-objects/chokoSignInPage.po.js');
var MessageWrapper = require('../page-objects/chokoMessagesWrapper.po.js');
var Helper = require('../helper.js');

describe('Chock SignIn Page', function() {
  var chokoSignInPage = new ChokoSignInPage();
  var helper = new Helper();
  var messageWrapper = new MessageWrapper();
  var randomName = helper.generateRandomString();
  var randomPassword = helper.generateRandomString();

  beforeEach(function(){
    chokoSignInPage.visit();
  });

  it('Try login with random user and password - invalids.', function() {
    chokoSignInPage.fillUserNameField(randomName);
    chokoSignInPage.fillUserPasswordField(randomPassword);
    chokoSignInPage.clickSignInButton();
    expect(messageWrapper.errorMessage.getText()).toContain('Invalid username or password.');
  });

 it('Try login just filling name field.', function() {
   chokoSignInPage.fillUserNameField(randomName);
   chokoSignInPage.clickSignInButton();
   expect(messageWrapper.errorMessage.getText()).toContain('Please provide an username and a password.');
 });

 it('Try login just filling password field.', function() {
   chokoSignInPage.fillUserPasswordField(randomPassword);
   chokoSignInPage.clickSignInButton();
  expect(messageWrapper.errorMessage.getText()).toContain('Please provide an username and a password.');
 });

 it('Try login without fill any field.', function() {
   chokoSignInPage.clickSignInButton();
   expect(messageWrapper.errorMessage.getText()).toContain('Please provide an username and a password.');
 });
});
