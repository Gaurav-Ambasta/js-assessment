exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var pattern = /\d+/;
    return pattern.test(str);
  },

  containsRepeatingLetter : function(str) {
    var pattern = /([a-zA-Z]).*?\1/;
    return pattern.test(str);
  },

  endsWithVowel : function(str) {
    var pattern = /\b[a-zA-Z][aeiou]\b/;
    return pattern.test(str);
  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
