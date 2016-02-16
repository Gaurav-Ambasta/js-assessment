exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    var fib = function(n) {
      return n < 2 ? n : fib(n - 1) + fib(n - 2);
    };
    return fib(n);
  },

  validParentheses: function(n) {

  }
};
