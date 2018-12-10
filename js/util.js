'use strict';

(function () {

  function getMaxElement(arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return Math.round(maxElement);
  }

  function getRandomIntegerFromInterval(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  window.util = {
    getMaxElement: getMaxElement,
    getRandomIntegerFromInterval: getRandomIntegerFromInterval
  };

})();
