'use strict';

(function () {

  var dialog = document.querySelector('.setup');
  var dialogHandle = dialog.querySelector('.upload');
  var dragged = false;
  var startCoords = {};
  var dialogOpen = document.querySelector('.setup-open');
  var dialogClose = dialog.querySelector('.setup-close');

  function dialogEscHandler(evt) {
    window.util.isEscEvent(evt, closeDialog);
  }

  function inputFocusHandler(evt) {
    if (evt.type === 'focus') {
      document.removeEventListener('keydown', dialogEscHandler);
    } else {
      document.addEventListener('keydown', dialogEscHandler);
    }
  }

  function openDialog() {
    dialog.classList.remove('hidden');
    document.addEventListener('keydown', dialogEscHandler);
    window.setup.setupUserName.addEventListener('focus', inputFocusHandler);
    window.setup.setupUserName.addEventListener('blur', inputFocusHandler);
    window.setup.wizardCoat.addEventListener('click', window.setup.wizardCoatClickHandler);
    window.setup.wizardEyes.addEventListener('click', window.setup.wizardEyesClickHandler);
    window.setup.wizardFireBall.addEventListener('click', window.setup.fireBallClickHandler);
    dialog.style.cssText = '';
  }

  function closeDialog() {
    dialog.classList.add('hidden');
    document.removeEventListener('keydown', dialogEscHandler);
    window.setup.setupUserName.removeEventListener('focus', inputFocusHandler);
    window.setup.setupUserName.removeEventListener('blur', inputFocusHandler);
    window.setup.wizardCoat.removeEventListener('click', window.setup.wizardCoatClickHandler);
    window.setup.wizardEyes.removeEventListener('click', window.setup.wizardEyesClickHandler);
    window.setup.wizardFireBall.removeEventListener('click', window.setup.fireBallClickHandler);
    dialog.style.cssText = '';
  }

  function onClickPreventDefault(clickEvt) {
    clickEvt.preventDefault();
    dialogHandle.removeEventListener('click', onClickPreventDefault);
  }

  function onHandleMouseMove(moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.pageX,
      y: startCoords.y - moveEvt.pageY
    };

    dialog.style.left = (dialog.offsetLeft - shift.x) + 'px';
    dialog.style.top = (dialog.offsetTop - shift.y) + 'px';

    startCoords = {
      x: moveEvt.pageX,
      y: moveEvt.pageY
    };
  }

  function onHandleMouseUp(upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onHandleMouseMove);
    document.removeEventListener('mouseup', onHandleMouseUp);

    if (dragged) {
      dialogHandle.addEventListener('click', onClickPreventDefault);
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

  dialogOpen.addEventListener('click', function () {
    openDialog();
  });

  dialogOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openDialog);
  });

  dialogHandle.addEventListener('mousedown', onHandleMouseDown);

  dialogClose.addEventListener('click', function () {
    closeDialog();
  });

  dialogClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeDialog);
  });

})();


