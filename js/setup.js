'use strict';

(function () {

  var WIZARDS_COUNT = 4;
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
  var similarWizards = window.data.getWizards(WIZARDS_COUNT);

  var setup = document.querySelector('.setup');
  var setupHandle = setup.querySelector('.upload');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var dragged = false;
  var startCoords = {};

  var setupPlayer = setup.querySelector('.setup-player');
  var setupUserName = setup.querySelector('.setup-user-name');
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
  }

  function wizardEyesClickHandler() {
    var color = window.util.getRandomElementFromArray(PLAYER_EYES_COLORS);
    wizardEyes.style.fill = color;
    inputEyes.value = color;
  }

  function fireBallClickHandler() {
    var color = window.util.getRandomElementFromArray(PLAYER_FIREBALL_COLOR);
    wizardFireBall.style.backgroundColor = color;
    inputFireBall.value = color;
  }

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

  function openSetup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', setupEscHandler);
    setupUserName.addEventListener('focus', inputFocusHandler);
    setupUserName.addEventListener('blur', inputFocusHandler);
    wizardCoat.addEventListener('click', wizardCoatClickHandler);
    wizardEyes.addEventListener('click', wizardEyesClickHandler);
    wizardFireBall.addEventListener('click', fireBallClickHandler);
    setup.style.cssText = '';
  }

  function closeSetup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', setupEscHandler);
    setupUserName.removeEventListener('focus', inputFocusHandler);
    setupUserName.removeEventListener('blur', inputFocusHandler);
    wizardCoat.removeEventListener('click', wizardCoatClickHandler);
    wizardEyes.removeEventListener('click', wizardEyesClickHandler);
    wizardFireBall.removeEventListener('click', fireBallClickHandler);
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

  window.setup = {
    similarWizards: similarWizards
  };

})();
