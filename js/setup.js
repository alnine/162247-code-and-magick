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

function createSimilarWizard(template, data) {
  var wizardItem = template.cloneNode(true);
  wizardItem.querySelector('.setup-similar-label').textContent = data.name;
  wizardItem.querySelector('.wizard-coat').style.fill = data.coatColor;
  wizardItem.querySelector('.wizard-eyes').style.fill = data.eyesColor;
  return wizardItem;
}

function renderList(list, place) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < list.length; i++) {
    var similarWizard = createSimilarWizard(wizardTemplate, list[i]);
    fragment.appendChild(similarWizard);
  }
  place.appendChild(fragment);
}

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

var wizards = getWizards(4);
var setupSimilarBlock = document.querySelector('.setup-similar');
var setupSimilarList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template')
                      .content
                      .querySelector('.setup-similar-item');

renderList(wizards, setupSimilarList);

setupSimilarBlock.classList.remove('hidden');
