'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var MESSAGE = 'Ура вы победили!\nСписок результатов:';
var CLOUD_MESSAGE = MESSAGE ? MESSAGE.split('\n') : MESSAGE;
var CLOUD_MESSAGE_X = CLOUD_X + GAP * 2;
var CLOUD_MESSAGE_Y = CLOUD_Y + GAP;
var CLOUD_MESSAGE_HEIGHT = CLOUD_MESSAGE.length * FONT_GAP;
var STAT_X = CLOUD_X + GAP * 4;
var STAT_Y = CLOUD_Y + GAP + CLOUD_MESSAGE_HEIGHT;
var STAT_HEIGHT = CLOUD_HEIGHT - GAP - CLOUD_MESSAGE_HEIGHT - GAP;
console.log(STAT_HEIGHT);
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_MAX_HEIGHT = 150;

//Функция отрисовки облака
function renderCloud (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  //Отрисовка тени под облаком
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');

  //Отрисовка облака
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  //Отрисовка текста сообщения
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  for (var i = 0; i < CLOUD_MESSAGE.length; i++) {
    ctx.fillText(CLOUD_MESSAGE[i], CLOUD_MESSAGE_X, CLOUD_MESSAGE_Y + FONT_GAP + (FONT_GAP * i));
  }

  //Отрисовка гистограммы
  for (var i = 0; i < names.length; i++) {
    //Цвет столбца по-умолчанию
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';

    //Цвет столбца игрока
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(STAT_X + (BAR_WIDTH + BAR_GAP) * i, STAT_Y + FONT_GAP + GAP, BAR_WIDTH, 150);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), STAT_X + (BAR_WIDTH + BAR_GAP) * i, STAT_Y + FONT_GAP);
    ctx.fillText(names[i], STAT_X + (BAR_WIDTH + BAR_GAP) * i, STAT_Y + FONT_GAP + GAP + 150 + FONT_GAP);
  }
};
