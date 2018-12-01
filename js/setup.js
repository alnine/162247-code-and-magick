'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

function getRandomIntegerFromInterval(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getRandomElementFromArray(arr) {
  return arr[getRandomIntegerFromInterval(0, arr.length - 1)];
}

function createWizard() {
  var data = {
    name: getRandomElementFromArray(WIZARD_NAMES) + ' ' + getRandomElementFromArray(WIZARD_SURNAMES),
    coatColor: getRandomElementFromArray(COAT_COLOR),
    eyesColor: getRandomElementFromArray(EYES_COLOR),
  };
  return data;
}

function getWizards(count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards.push(createWizard());
  }
  return wizards;
}

function getWizardLayout(data) {
  var wizardTemplate = document.querySelector('#similar-wizard-template')
                      .content
                      .querySelector('.setup-similar-item');
  var wizardItem = wizardTemplate.cloneNode(true);
  wizardItem.querySelector('.setup-similar-label').textContent = data.name;
  wizardItem.querySelector('.wizard-coat').style.fill = data.coatColor;
  wizardItem.querySelector('.wizard-eyes').style.fill = data.eyesColor;
  return wizardItem;
}

function renderWizards(list) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < list.length; i++) {
    var similarWizard = getWizardLayout(list[i]);
    fragment.appendChild(similarWizard);
  }
  return fragment;
}

var userSetup = document.querySelector('.setup');
var wizards = getWizards(4);
var setupSimilarBlock = document.querySelector('.setup-similar');
var wizardsSimilarList = document.querySelector('.setup-similar-list');

wizardsSimilarList.appendChild(renderWizards(wizards));
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
}

function closeSetup() {
  userSetup.classList.add('hidden');
  document.removeEventListener('keydown', setupEscHandler);
  setupUserName.removeEventListener('focus', inputFocusHandler);
  setupUserName.removeEventListener('blur', inputFocusHandler);
  wizardCoat.removeEventListener('click', wizardCoatClickHandler);
  wizardEyes.removeEventListener('click', wizardEyesClickHandler);
  wizardFireBall.removeEventListener('click', fireBallClickHandler);
}

function wizardCoatClickHandler() {
  var color = getRandomElementFromArray(COAT_COLOR);
  wizardCoat.setAttribute('style', 'fill: ' + color);
  inputCoat.value = color;
}

function wizardEyesClickHandler() {
  var color = getRandomElementFromArray(EYES_COLOR);
  wizardEyes.style.fill = color;
  inputEyes.value = color;
}

function fireBallClickHandler() {
  var color = getRandomElementFromArray(FIREBALL_COLOR);
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
