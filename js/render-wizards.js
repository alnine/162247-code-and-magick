'use strict';

(function () {

  var wizardTemplate = document.querySelector('#similar-wizard-template')
                      .content
                      .querySelector('.setup-similar-item');

  function createWizard() {
    var data = {
      name: window.util.getRandomElementFromArray(window.dataWizards.wizardNames) + ' ' +
            window.util.getRandomElementFromArray(window.dataWizards.wizardSurnames),
      coatColor: window.util.getRandomElementFromArray(window.dataWizards.coatColors),
      eyesColor: window.util.getRandomElementFromArray(window.dataWizards.eyesColors)
    };
    return data;
  }

  function getWizardLayout(data) {
    var wizardItem = wizardTemplate.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = data.name;
    wizardItem.querySelector('.wizard-coat').style.fill = data.coatColor;
    wizardItem.querySelector('.wizard-eyes').style.fill = data.eyesColor;
    return wizardItem;
  }

  function getWizards(count) {
    var wizards = [];
    for (var i = 0; i < count; i++) {
      wizards.push(createWizard());
    }
    return wizards;
  }

  function renderWizards(count) {
    var wizards = getWizards(count);
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      var similarWizard = getWizardLayout(wizards[i]);
      fragment.appendChild(similarWizard);
    }
    return fragment;
  }

  window.renderWizards = renderWizards;

})();
