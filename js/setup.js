'use strict';

(function () {

  var WIZARDS_COUNT = 4;
  var setup = document.querySelector('.setup');
  var setupPlayer = setup.querySelector('.setup-player');
  var setupUserName = setup.querySelector('.setup-user-name');
  var wizardCoat = setupPlayer.querySelector('.setup-wizard .wizard-coat');
  var inputCoat = setupPlayer.querySelector('input[name="coat-color"]');
  var wizardEyes = setupPlayer.querySelector('.setup-wizard .wizard-eyes');
  var inputEyes = setupPlayer.querySelector('input[name="eyes-color"]');
  var wizardFireBall = setupPlayer.querySelector('.setup-fireball-wrap');
  var inputFireBall = wizardFireBall.querySelector('input');
  var setupSimilarBlock = document.querySelector('.setup-similar');
  var wizardsSimilarList = document.querySelector('.setup-similar-list');

  function wizardCoatClickHandler() {
    var color = window.util.getRandomElementFromArray(window.dataWizards.coatColors);
    wizardCoat.setAttribute('style', 'fill: ' + color);
    inputCoat.value = color;
  }

  function wizardEyesClickHandler() {
    var color = window.util.getRandomElementFromArray(window.dataWizards.eyesColors);
    wizardEyes.style.fill = color;
    inputEyes.value = color;
  }

  function fireBallClickHandler() {
    var color = window.util.getRandomElementFromArray(window.dataWizards.fireballColors);
    wizardFireBall.style.backgroundColor = color;
    inputFireBall.value = color;
  }

  wizardsSimilarList.appendChild(window.renderWizards(WIZARDS_COUNT));
  setupSimilarBlock.classList.remove('hidden');

  window.setup = {
    setupUserName: setupUserName,
    wizardCoat: wizardCoat,
    wizardEyes: wizardEyes,
    wizardFireBall: wizardFireBall,
    wizardCoatClickHandler: wizardCoatClickHandler,
    wizardEyesClickHandler: wizardEyesClickHandler,
    fireBallClickHandler: fireBallClickHandler
  };

})();
