'use strict';

(function () {

  var PLAYER_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var PLAYER_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var PLAYER_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var playerWizard = {
    wizardCoatClickHandler: wizardCoatClickHandler,
    wizardEyesClickHandler: wizardEyesClickHandler,
    fireBallClickHandler: fireBallClickHandler,
    coatChangeHandler: function () {},
    eyesChangeHandler: function () {}
  };

  var setup = document.querySelector('.setup');
  var setupPlayer = setup.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.setup-wizard .wizard-coat');
  var inputCoat = setupPlayer.querySelector('input[name="coat-color"]');
  var wizardEyes = setupPlayer.querySelector('.setup-wizard .wizard-eyes');
  var inputEyes = setupPlayer.querySelector('input[name="eyes-color"]');
  var wizardFireBall = setupPlayer.querySelector('.setup-fireball-wrap');
  var inputFireBall = wizardFireBall.querySelector('input');

  function wizardCoatClickHandler() {
    var color = window.util.getRandomElementFromArray(PLAYER_COAT_COLORS);
    wizardCoat.setAttribute('style', 'fill: ' + color);
    inputCoat.value = color;
    playerWizard.coatChangeHandler(color);
  }

  function wizardEyesClickHandler() {
    var color = window.util.getRandomElementFromArray(PLAYER_EYES_COLORS);
    wizardEyes.style.fill = color;
    inputEyes.value = color;
    playerWizard.eyesChangeHandler(color);
  }

  function fireBallClickHandler() {
    var color = window.util.getRandomElementFromArray(PLAYER_FIREBALL_COLOR);
    wizardFireBall.style.backgroundColor = color;
    inputFireBall.value = color;
  }

  window.playerWizard = playerWizard;

})();
