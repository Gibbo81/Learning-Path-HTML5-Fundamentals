//Private method in JS


var module = (function (){
})();
/*
It declares a function, which then calls itself immediately. These are also known
as Immediately-Invoked-Function-Expressions, in which the function creates new scope
and creates “privacy”. JavaScript doesn’t have privacy, but creating new scope
emulates this when we wrap all our function logic inside them. The idea then is
to return only the parts we need, leaving the other code out of the global
 scope*/

//Second examples
//privateMethod isa  privateMethod, locally declared inside the new scope
//but if needed we can call it using publicMethodOne()
var module2 = (function () {

  var _privateMethod = function () {console.log('privateMethod called');};

  return {
    publicMethodOne: function () {
        _privateMethod();// I can call `privateMethod()` you know...
    },
    publicMethodTwo: function () {},
    publicMethodThree: function () {}
  };
})();

module2.publicMethodOne();

//identical to previous example without literal notation
var module3 = (function () {
  var _privateMethod = function () {console.log('2° private method called')};
  var _privateArray = [1,5,7,'a'];

  var myObject = {};
  myObject.someMethod = function () {
    _privateMethod();
  };
  myObject.writeArray = function (){
    for (var i = 0; i < _privateArray.length; i++) {
      console.log(_privateArray[i]);
    }
  }
  return myObject;
})();

module3.someMethod();
module3.writeArray();//It also work for 'private' field as this array

//It's possible to extend the module to add a new properties:
var module4 = (function (Module) {

    var _privateMethod = function () {console.log('Extension private method called')};
    Module.extension = function () {
        _privateMethod()
    };
    return Module;
})(module3 || {});

module4.extension();
console.log(module4);
