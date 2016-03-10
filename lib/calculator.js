'use strict';

function Calculator (){
  this.getResult = function(){
    return this.result;
  };
  
  this.add = function(a, b){
    this.result =  +a + +b;
  };
}

module.exports = Calculator;