'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 18;
var BAR_WIDTH = 40;
var BAR_MAXHEIGHT = 150;
var BAR_GAP = 50;
var FONT = '16px PT Mono';
var FONT_COLOR = '#000';

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.font = FONT;
  ctx.fillStyle = FONT_COLOR;
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barColor = 'hsl(240, ' + Math.floor(Math.random() * 100) +'%, 50%)';

    if (names[i] === 'Вы') {
      var barColor = 'rgba(255, 0, 0, 1)';
    }

    var barHeight = BAR_MAXHEIGHT * times[i] / maxTime;

    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP * 2 + (BAR_WIDTH + BAR_GAP) * [i], CLOUD_Y + GAP + FONT_GAP * 3.5 + BAR_MAXHEIGHT - barHeight);
    ctx.fillStyle = barColor;
    ctx.fillRect(CLOUD_X + GAP * 2 + (BAR_WIDTH + BAR_GAP) * [i], CLOUD_Y + GAP + FONT_GAP * 4 + BAR_MAXHEIGHT - barHeight, BAR_WIDTH, barHeight);
    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(names[i], CLOUD_X + GAP * 2 + (BAR_WIDTH + BAR_GAP) * [i], CLOUD_Y + CLOUD_HEIGHT - GAP * 1.5);
  }
};
