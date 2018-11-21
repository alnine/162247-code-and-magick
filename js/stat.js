'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var CLOUD_MESSAGE = 'Ура вы победили!\nСписок результатов:';
var CLOUD_MESSAGE_X = CLOUD_X + GAP * 2;
var CLOUD_MESSAGE_Y = CLOUD_Y + GAP;
var STAT_X = CLOUD_X + GAP * 4;
var STAT_Y = CLOUD_Y + GAP + FONT_GAP * 2;
var STAT_HEIGHT = CLOUD_HEIGHT - GAP - FONT_GAP * 2 - GAP * 2;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_MAX_HEIGHT = 150;

function renderCloud(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

function getMaxElement(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return Math.round(maxElement);
}

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function renderCloudMessage(ctx, text, textColor, fontStyle) {
  ctx.fillStyle = textColor;
  ctx.font = fontStyle;
  var messages = text.split('\n');
  for (var i = 0; i < messages.length; i++) {
    ctx.fillText(messages[i], CLOUD_MESSAGE_X, CLOUD_MESSAGE_Y + FONT_GAP + (FONT_GAP * i));
  }
}

function renderBarChart(ctx, names, times) {
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var saturation = getRandomInt(0, 100);
    var barHeigth = (BAR_MAX_HEIGHT * times[i]) / maxTime;
    var pointY = STAT_HEIGHT - GAP - barHeigth - FONT_GAP;

    ctx.fillStyle = 'hsla(240, ' + saturation + '%, 50%, 1)';

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(STAT_X + (BAR_WIDTH + BAR_GAP) * i, STAT_Y + pointY + GAP, BAR_WIDTH, barHeigth);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), STAT_X + (BAR_WIDTH + BAR_GAP) * i, STAT_Y + pointY);
    ctx.fillText(names[i], STAT_X + (BAR_WIDTH + BAR_GAP) * i, STAT_Y + pointY + GAP + barHeigth + FONT_GAP);
  }
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderCloudMessage(ctx, CLOUD_MESSAGE, '#000', '16px PT Mono');

  renderBarChart(ctx, names, times);
};
