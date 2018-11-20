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

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  var cloudMessages = CLOUD_MESSAGE.split('\n');
  for (var m = 0; m < cloudMessages.length; m++) {
    ctx.fillText(cloudMessages[m], CLOUD_MESSAGE_X, CLOUD_MESSAGE_Y + FONT_GAP + (FONT_GAP * m));
  }

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    var barHeigth = (BAR_MAX_HEIGHT * times[i]) / maxTime;
    var pointY = STAT_HEIGHT - GAP - barHeigth - FONT_GAP;

    ctx.fillRect(STAT_X + (BAR_WIDTH + BAR_GAP) * i, STAT_Y + pointY + GAP, BAR_WIDTH, barHeigth);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), STAT_X + (BAR_WIDTH + BAR_GAP) * i, STAT_Y + pointY);
    ctx.fillText(names[i], STAT_X + (BAR_WIDTH + BAR_GAP) * i, STAT_Y + pointY + GAP + barHeigth + FONT_GAP);
  }
};
