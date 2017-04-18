 // chokoSignInPage.po.js
 var Helper = require('/Users/eloyvitorio/Documents/Projeto-teste-protractor/tests/e2e/helper.js');
 var helper = new Helper();

 var ChokoSignInPage = function(){
   this.userNameField = element(by.id('element-sign-in-username'));
   this.userPasswordField = element(by.id('element-sign-in-password'));
   this.signInButton = element(by.id('element-sign-in-submit'));
 };

 ChokoSignInPage.prototype.visit = function(){
   browser.get('http://choko.org/sign-in');
 };

 ChokoSignInPage.prototype.fillUserNameField = function(name){
   helper.waitElementVisibility(this.userNameField);
   this.userNameField.sendKeys(name);
 };

 ChokoSignInPage.prototype.fillUserPasswordField = function(password){
   helper.waitElementVisibility(this.userPasswordField)
   this.userPasswordField.sendKeys(password);
 };

 ChokoSignInPage.prototype.clickSignInButton = function(){
   helper.waitElementVisibility(this.signInButton);
   this.signInButton.click();
 };

module.exports = ChokoSignInPage
