//Private method with module pattern in JS


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
//_privateMethod is a private method, locally declared inside the new scope
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
  myObject.getArray = function(){
    return _privateArray;
  }
  return myObject;
})();

module3.someMethod();
module3.writeArray();//It also work for 'private' field as this array
console.log(module3.getArray());

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

//In simple case we can return a function instead of an object (fibonacci)
var module5 = (function(){
  var memo =[0,1];
  var fib = function (n){
    if (typeof memo[n] === 'undefined') //how to check for undefined
      memo[n] = fib(n-1) + fib(n-2)
    return memo[n];
  };

  return fib;
})();
console.log('fibonacci 8: ' + module5(8));

//we can generalize it
var memoizer = (function(memo, fun){
  var rec = function(n){
    if (typeof memo[n] === 'undefined')
      memo[n] = fun(rec,n);
    return memo [n];
  }
  return rec;
})

var fibonacci_2 = memoizer([0,1], (recur, n) => recur(n-1) + recur(n-2));
console.log('fibonacci 9: ' + fibonacci_2(9));
