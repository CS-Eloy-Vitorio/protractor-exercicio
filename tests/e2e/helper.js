// helper.js
var EC = protractor.ExpectedConditions;
var shortid = require('shortid');
var uuid = require('node-uuid');

var Helper = function() {};

 Helper.prototype.generateRandomEmail = function() {
   return shortid.generate() + '@email.com';
 };

 Helper.prototype.generateRandomString = function() {
   return uuid.v4();
 };

Helper.prototype.waitElementVisibility = function(element) {
 browser.wait(EC.visibilityOf(element), 5000);
 };

module.exports = Helper;
