exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    for(var i= start; i<= end; i++) {
      (function(val) {
        setTimeout(function () {
          console.log(val);
        }, 100);
      })(i);
    }
  }
};
