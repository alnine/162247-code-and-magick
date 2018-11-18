'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var cloudMessage = 'Ура вы победили!\nСписок результатов:';

//Функция отрисовки облака
function renderCloud (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  //Отрисовка тени под облаком
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');

  //Отрисовка облака
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  //Отрисовка текста сообщения
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  cloudMessage = cloudMessage.split('\n');
  for (var i = 0; i < cloudMessage.length; i++) {
    ctx.fillText(cloudMessage[i], 120, 30 + 20 * i);
  }

  //Отрисовка гистограммы
  ctx.fillText('1000', 140, 80);
  ctx.fillStyle = 'red';
  ctx.fillRect(140, 100, 40, 150);
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 140, 260);

  ctx.fillText('1000', 230, 80);
  ctx.fillStyle = 'blue';
  ctx.fillRect(230, 100, 40, 150);
  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', 230, 260);

  ctx.fillText('1000', 320, 80);
  ctx.fillStyle = 'blue';
  ctx.fillRect(320, 100, 40, 150);
  ctx.fillStyle = '#000';
  ctx.fillText('Катя', 320, 260);

  ctx.fillText('1000', 410, 80);
  ctx.fillStyle = 'blue';
  ctx.fillRect(410, 100, 40, 150);
  ctx.fillStyle = '#000';
  ctx.fillText('Игорь', 410, 260);
};
