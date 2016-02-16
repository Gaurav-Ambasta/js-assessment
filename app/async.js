exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var promise = new Promise(function(resolve, reject) {
      if (value) {
        window.setTimeout(
            function() {
              resolve(value);
            }, 0);
      }
      else {
        reject(Error("It fail"));
      }
    });
    return promise;
  },

  manipulateRemoteData : function(url) {
    var promise = new Promise(function(resolve, reject) {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, true);
      xhttp.onreadystatechange = function(response) {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          resolve(JSON.parse(xhttp.responseText).people.map(function (obj) {
            return obj.name;
          }).sort());
        }
      };
      xhttp.send();
    });
    return promise;
  }
};
