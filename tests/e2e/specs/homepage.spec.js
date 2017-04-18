var ApiPage = require('/Users/eloyvitorio/Documents/Projeto-teste-protractor/tests/e2e/page-objects/apiPage.po.js');

describe('Homepage', function() {
  var apiPage = new ApiPage();

  beforeEach(function(){
    apiPage.visit();
  });

  it('perform a search into the api page', function() {
    apiPage.fillSearchField('restart');
    apiPage.clickButtonSearch();
    expect(apiPage.apiTitleResult.getText()).toContain('browser.restart');
 });
});
