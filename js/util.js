'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

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

  function isEscEvent(evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  }

  function isEnterEvent(evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  }

  window.util = {
    getMaxElement: getMaxElement,
    getRandomIntegerFromInterval: getRandomIntegerFromInterval,
    getRandomElementFromArray: getRandomElementFromArray,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent
  };

})();
