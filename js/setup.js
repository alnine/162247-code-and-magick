'use strict';

var WIZARDS_COUNT = 4;
var userSetup = document.querySelector('.setup');
var setupSimilarBlock = document.querySelector('.setup-similar');
var wizardsSimilarList = document.querySelector('.setup-similar-list');

wizardsSimilarList.appendChild(window.renderWizards(WIZARDS_COUNT));
setupSimilarBlock.classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = userSetup.querySelector('.setup-close');
var setupUserName = userSetup.querySelector('.setup-user-name');
var setupPlayer = userSetup.querySelector('.setup-player');
var wizardCoat = setupPlayer.querySelector('.setup-wizard .wizard-coat');
var inputCoat = setupPlayer.querySelector('input[name="coat-color"]');
var wizardEyes = setupPlayer.querySelector('.setup-wizard .wizard-eyes');
var inputEyes = setupPlayer.querySelector('input[name="eyes-color"]');
var wizardFireBall = setupPlayer.querySelector('.setup-fireball-wrap');
var inputFireBall = wizardFireBall.querySelector('input');

function setupEscHandler(evt) {
  if (evt.keyCode === 27) {
    closeSetup();
  }
}

function inputFocusHandler(evt) {
  if (evt.type === 'focus') {
    document.removeEventListener('keydown', setupEscHandler);
  } else {
    document.addEventListener('keydown', setupEscHandler);
  }
}

function openSetup() {
  userSetup.classList.remove('hidden');
  document.addEventListener('keydown', setupEscHandler);
  setupUserName.addEventListener('focus', inputFocusHandler);
  setupUserName.addEventListener('blur', inputFocusHandler);
  wizardCoat.addEventListener('click', wizardCoatClickHandler);
  wizardEyes.addEventListener('click', wizardEyesClickHandler);
  wizardFireBall.addEventListener('click', fireBallClickHandler);
  userSetup.style.cssText = '';
}

function closeSetup() {
  userSetup.classList.add('hidden');
  document.removeEventListener('keydown', setupEscHandler);
  setupUserName.removeEventListener('focus', inputFocusHandler);
  setupUserName.removeEventListener('blur', inputFocusHandler);
  wizardCoat.removeEventListener('click', wizardCoatClickHandler);
  wizardEyes.removeEventListener('click', wizardEyesClickHandler);
  wizardFireBall.removeEventListener('click', fireBallClickHandler);
  userSetup.style.cssText = '';
}

function wizardCoatClickHandler() {
  var color = window.util.getRandomElementFromArray(COAT_COLOR);
  wizardCoat.setAttribute('style', 'fill: ' + color);
  inputCoat.value = color;
}

function wizardEyesClickHandler() {
  var color = window.util.getRandomElementFromArray(EYES_COLOR);
  wizardEyes.style.fill = color;
  inputEyes.value = color;
}

function fireBallClickHandler() {
  var color = window.util.getRandomElementFromArray(FIREBALL_COLOR);
  wizardFireBall.style.backgroundColor = color;
  inputFireBall.value = color;
}

setupOpen.addEventListener('click', function () {
  openSetup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openSetup();
  }
});

setupClose.addEventListener('click', function () {
  closeSetup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closeSetup();
  }
});
