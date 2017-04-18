//apiPage.po.js
var Helper = require('../helper.js');
var helper = new Helper();

var ApiPage  = function(){
  this.searchTermField = element(by.model('searchTerm'));
  this.depht1Button = element(by.css('.depth-1'));
  this.apiTitleResult = element(by.css('.api-title'))
};

ApiPage.prototype.fillSearchField = function(criterio){
  helper.waitElementVisibility(this.searchTermField);
  this.searchTermField.sendKeys(criterio);
};

ApiPage.prototype.clickButtonSearch = function(){
  helper.waitElementVisibility(this.depht1Button);
  this.depht1Button.click()
};

ApiPage.prototype.visit = function(){
  //browser.get('#/api');
  browser.get('http://www.protractortest.org/#/api');
};

module.exports = ApiPage;
