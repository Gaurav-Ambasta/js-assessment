exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
   return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    });
  },

  remove : function(arr, item) {
    var result = [];
    for (var i=0; i < arr.length; i++) {
      if (arr[i] !== item) {
        result.push(arr[i]);
      }
    }
    return result;
  },

  removeWithoutCopy : function(arr, item) {
    var index = arr.indexOf(item);
    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(value) {
      return item === value;
    }).length;
  },

  duplicates : function(arr) {
   var map = {};
    return arr.filter(function(value) {
     if(map[value] === 1) {
       map[value]++;
       return true;
     }else {
       map[value] = 1;
       return false;
     }
   });
  },

  square : function(arr) {
    return arr.map(function (value) {
      return value * value;
    });
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    arr.map(function(value, index) {
      if(target === value) {
        result.push(index);
      }
      return value;
    });
    return result;
  }
};
