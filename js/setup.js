'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomElementOfArray(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}

function createWizardObject(name, surname, coatColor, eyesColor) {
  var wizardObject = {
    name: name + ' ' + surname,
    coatColor: coatColor,
    eyesColor: eyesColor
  };

  return wizardObject;
}

function getWizardsList(number) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    wizards
      .push(
          createWizardObject(
              getRandomElementOfArray(WIZARD_NAMES),
              getRandomElementOfArray(WIZARD_SURNAMES),
              getRandomElementOfArray(COAT_COLOR),
              getRandomElementOfArray(EYES_COLOR)
          )
      );
  }
  return wizards;
}

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

// Тестирование
var wizArr = getWizardsList(4);
console.log(wizArr);
