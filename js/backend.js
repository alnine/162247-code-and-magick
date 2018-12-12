'use strict';

(function () {

  var URL = 'https://js.dump.academy/code-and-magick';

  function load(onLoad, onError) {

  }

  function save(FormData, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responceType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad('Изменения успешно сохранены');
      } else {
        onError('Ошибка: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.open('POST', URL);
    xhr.send(FormData);
  }

  window.backend = {
    load: load,
    save: save
  };
})();
