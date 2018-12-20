'use strict';

(function () {

  var WIZARDS_COUNT = 4;
  var wizardTemplate = document.querySelector('#similar-wizard-template')
                      .content
                      .querySelector('.setup-similar-item');

  var setupSimilarList = document.querySelector('.setup-similar-list');

  function getWizardLayout(data) {
    var wizardItem = wizardTemplate.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = data.name;
    wizardItem.querySelector('.wizard-coat').style.fill = data.colorCoat;
    wizardItem.querySelector('.wizard-eyes').style.fill = data.colorEyes;
    return wizardItem;
  }

  function renderWizards(wizards) {
    var fragment = document.createDocumentFragment();
    setupSimilarList.innerHTML = '';
    for (var i = 0; i < WIZARDS_COUNT; i++) {
      var similarWizard = getWizardLayout(wizards[i]);
      fragment.appendChild(similarWizard);
    }
    setupSimilarList.appendChild(fragment);
  }

  window.renderWizards = renderWizards;

})();
