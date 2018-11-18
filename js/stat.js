'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var cloudMessage = 'Ура вы победили!\nСписок результатов:';

function renderCloud (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
};
