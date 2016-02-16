exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ", " + str2;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(value) {
      return function(){
        return fn(value);
      }
    })
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments : function() {
    var sum=0;
    for (var i=0; i < arguments.length; i++ ){
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    var sum = [];
    for (var i=1; i < arguments.length; i++ ){
      sum.push(arguments[i]);
    }
    return fn.apply(null, sum);
  },

  partialUsingArguments : function(fn) {
    var sum = [];
    for (var i=1; i < arguments.length; i++ ){
      sum.push(arguments[i]);
    }
    return function() {
      for (var i=0; i < arguments.length; i++ ){
        sum.push(arguments[i]);
      }
      return fn.apply(null, sum);
    }
  },

  curryIt : function(fn) {

  }
};
