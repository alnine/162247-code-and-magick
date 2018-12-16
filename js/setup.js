'use strict';

(function () {

  var errorDialog = document.querySelector('.error-message');

  var setup = document.querySelector('.setup');
  var setupHandle = setup.querySelector('.upload');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupForm = setup.querySelector('.setup-wizard-form');
  var setupSimilarSection = setup.querySelector('.setup-similar');

  var dragged = false;
  var startCoords = {};

  var setupPlayer = setup.querySelector('.setup-player');
  var setupUserName = setup.querySelector('.setup-user-name');
  var wizardCoat = setupPlayer.querySelector('.setup-wizard .wizard-coat');
  var inputCoat = setupPlayer.querySelector('input[name="coat-color"]');
  var wizardEyes = setupPlayer.querySelector('.setup-wizard .wizard-eyes');
  var inputEyes = setupPlayer.querySelector('input[name="eyes-color"]');
  var wizardFireBall = setupPlayer.querySelector('.setup-fireball-wrap');

  var dataSimilar = [];
  var coatColor = inputCoat.value;
  var eyesColor = inputEyes.value;

  function setupEscHandler(evt) {
    window.util.isEscEvent(evt.keyCode, closeSetup);
  }

  function inputFocusHandler(evt) {
    if (evt.type === 'focus') {
      document.removeEventListener('keydown', setupEscHandler);
    } else {
      document.addEventListener('keydown', setupEscHandler);
    }
  }

  function getRank(wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  function updateSimilars() {
    window.renderWizards(dataSimilar
                          .slice()
                          .sort(function (left, right) {
                            return getRank(right) - getRank(left);
                          })
    );
  }

  window.playerWizard.coatChangeHandler = window.util.debounce(function (color) {
    coatColor = color;
    updateSimilars();
  });

  window.playerWizard.eyesChangeHandler = window.util.debounce(function (color) {
    eyesColor = color;
    updateSimilars();
  });

  function successHandler(data) {
    dataSimilar = data;
    updateSimilars();
    setupSimilarSection.classList.remove('hidden');
  }

  function errorHandler(message) {
    errorDialog.textContent = message;
    errorDialog.classList.remove('hidden');
  }

  function formSubmitHandler(evt) {
    window.backend.save(new FormData(setupForm), closeSetup, errorHandler);
    evt.preventDefault();
  }

  function openSetup() {
    setup.classList.remove('hidden');
    window.backend.load(successHandler, errorHandler);
    document.addEventListener('keydown', setupEscHandler);
    setupForm.addEventListener('submit', formSubmitHandler);
    setupUserName.addEventListener('focus', inputFocusHandler);
    setupUserName.addEventListener('blur', inputFocusHandler);
    wizardCoat.addEventListener('click', window.playerWizard.wizardCoatClickHandler);
    wizardEyes.addEventListener('click', window.playerWizard.wizardEyesClickHandler);
    wizardFireBall.addEventListener('click', window.playerWizard.fireBallClickHandler);
    setup.style.cssText = '';
  }

  function closeSetup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', setupEscHandler);
    setupForm.removeEventListener('submit', formSubmitHandler);
    setupUserName.removeEventListener('focus', inputFocusHandler);
    setupUserName.removeEventListener('blur', inputFocusHandler);
    wizardCoat.removeEventListener('click', window.playerWizard.wizardCoatClickHandler);
    wizardEyes.removeEventListener('click', window.playerWizard.wizardEyesClickHandler);
    wizardFireBall.removeEventListener('click', window.playerWizard.fireBallClickHandler);
    setup.style.cssText = '';
  }

  function onHandleMouseMove(moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.pageX,
      y: startCoords.y - moveEvt.pageY
    };

    setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    setup.style.top = (setup.offsetTop - shift.y) + 'px';

    startCoords = {
      x: moveEvt.pageX,
      y: moveEvt.pageY
    };
  }

  function onClickPreventDefault(clickEvt) {
    clickEvt.preventDefault();
    setupHandle.removeEventListener('click', onClickPreventDefault);
  }

  function onHandleMouseUp(upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onHandleMouseMove);
    document.removeEventListener('mouseup', onHandleMouseUp);

    if (dragged) {
      setupHandle.addEventListener('click', onClickPreventDefault);
    }
  }

  function onHandleMouseDown(downEvt) {
    downEvt.preventDefault();

    startCoords = {
      x: downEvt.pageX,
      y: downEvt.pageY
    };

    document.addEventListener('mousemove', onHandleMouseMove);
    document.addEventListener('mouseup', onHandleMouseUp);
  }

  setupOpen.addEventListener('click', function () {
    openSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt.keyCode, openSetup);
  });

  setupHandle.addEventListener('mousedown', onHandleMouseDown);

  setupClose.addEventListener('click', function () {
    closeSetup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt.keyCode, closeSetup);
  });

})();
