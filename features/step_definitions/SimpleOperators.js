'use strict';
module.exports = function() {

  this.Given(/^I have calculator$/, function(callback){
    // do nothing
    callback();
  });

  this.When(/^I add (\d+) and (\d+)$/, function(a, b, callback){
    this.add(a, b);
    callback();
  });

  this.Then(/^I should see (\d+)$/, function(result, callback){
    var r = this.getResult();
    if(r == result){
      callback();
    } else {
      callback(new Error("total number displayed wrongly, actual is " + r ));
    }
  });
}