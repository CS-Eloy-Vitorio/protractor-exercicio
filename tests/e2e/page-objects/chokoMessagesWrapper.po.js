// chokoMessagesWrapper.po.js

var MessageWrapper = function(){
  this.errorMessage = element(by.repeater('error in errors'))
};

module.exports = MessageWrapper;
