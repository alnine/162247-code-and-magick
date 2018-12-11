'use strict';

(function () {

  var wizardTemplate = document.querySelector('#similar-wizard-template')
                      .content
                      .querySelector('.setup-similar-item');
  var setupSimilarSection = document.querySelector('.setup-similar');
  var setupSimilarList = document.querySelector('.setup-similar-list');

  function getWizardLayout(data) {
    var wizardItem = wizardTemplate.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = data.name;
    wizardItem.querySelector('.wizard-coat').style.fill = data.coatColor;
    wizardItem.querySelector('.wizard-eyes').style.fill = data.eyesColor;
    return wizardItem;
  }

  function renderWizards(wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      var similarWizard = getWizardLayout(wizards[i]);
      fragment.appendChild(similarWizard);
    }
    return fragment;
  }

  var wizards = window.setup.similarWizards;
  setupSimilarList.appendChild(renderWizards(wizards));
  setupSimilarSection.classList.remove('hidden');

})();
