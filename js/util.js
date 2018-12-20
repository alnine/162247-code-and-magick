'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var DEBOUNCE_INTERVAL = 500;

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

  function getRandomElementFromArray(arr) {
    return arr[getRandomIntegerFromInterval(0, arr.length - 1)];
  }

  function isEscEvent(keyCode, action) {
    if (keyCode === ESC_KEYCODE) {
      action();
    }
  }

  function isEnterEvent(keyCode, action) {
    if (keyCode === ENTER_KEYCODE) {
      action();
    }
  }

  function debounce(callback) {
    var lastTimeout = null;

    return function () {
      var params = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        callback.apply(null, params);
      }, DEBOUNCE_INTERVAL);
    };
  }

  window.util = {
    getMaxElement: getMaxElement,
    getRandomIntegerFromInterval: getRandomIntegerFromInterval,
    getRandomElementFromArray: getRandomElementFromArray,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    debounce: debounce
  };

})();
