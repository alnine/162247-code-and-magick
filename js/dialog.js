'use strict';

var dialogElement = document.querySelector('.setup');
var dialogHandler = dialogElement.querySelector('.upload');

dialogHandler.addEventListener('mousedown', function (downEvt) {
  downEvt.preventDefault();

  var dragged = false;

  var startCoords = {
    x: downEvt.pageX,
    y: downEvt.pageY
  };

  function onHandlerMouseMove(moveEvt) {
    moveEvt.preventDefault();

    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.pageX,
      y: startCoords.y - moveEvt.pageY
    };

    dialogElement.style.left = (dialogElement.offsetLeft - shift.x) + 'px';
    dialogElement.style.top = (dialogElement.offsetTop - shift.y) + 'px';

    startCoords = {
      x: moveEvt.pageX,
      y: moveEvt.pageY
    };
  }

  function onHandlerMouseUp(upEvt) {
    upEvt.preventDefault();

    function onClickPreventDefault(clickEvt) {
      clickEvt.preventDefault();
      dialogHandler.removeEventListener('click', onClickPreventDefault);
    }

    document.removeEventListener('mousemove', onHandlerMouseMove);
    document.removeEventListener('mouseup', onHandlerMouseUp);

    if (dragged) {
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }
  }

  document.addEventListener('mousemove', onHandlerMouseMove);
  document.addEventListener('mouseup', onHandlerMouseUp);
});
