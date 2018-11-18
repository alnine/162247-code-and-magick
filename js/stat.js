'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var cloudMessage = 'Ура вы победили!\nСписок результатов:';

//Функция отрисовки облака
function renderCloud (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  //Отрисовка тени под облаком
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');

  //Отрисовка облака
  renderCloud(ctx, 100, 10, '#fff');

  //Отрисовка текста сообщения
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  cloudMessage = cloudMessage.split('\n');
  for (var i = 0; i < cloudMessage.length; i++) {
    ctx.fillText(cloudMessage[i], 120, 30 + 20 * i);
  }
};
