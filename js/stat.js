'use strict';

var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var PADDING = GAP * 2;
var FONT_GAP = 18;
var BAR_WIDTH = 40;
var BAR_MAXHEIGHT = 150;
var BAR_GAP = 50;
var BAR_Y = CLOUD_Y + GAP + FONT_GAP * 4;
var BAR_TOPTEXT_Y = CLOUD_Y + GAP + FONT_GAP * 3.5;
var BAR_BOTTOMTEXT_Y = CLOUD_Y + CLOUD_HEIGHT - GAP * 1.5;
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

var getRandomSaturationColor = function (hue) {
  return 'hsl(' + hue + ', ' + Math.floor(Math.random() * 100) + '%, 50%)';
};

var drawText = function (ctx, color, text, coorX, coorY) {
  ctx.fillStyle = color;
  ctx.fillText(text, coorX, coorY);
};

var drawBar = function (ctx, color, coorX, coorY, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(coorX, coorY, width, height);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.font = FONT;
  ctx.fillStyle = FONT_COLOR;
  ctx.fillText('Ура вы победили!', CLOUD_X + PADDING, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + PADDING, CLOUD_Y + GAP + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barColor = getRandomSaturationColor(240);
    var barHeight = BAR_MAXHEIGHT * times[i] / maxTime;
    var barCoorX = CLOUD_X + PADDING + (BAR_WIDTH + BAR_GAP) * i;
    var barCoorY = BAR_Y + BAR_MAXHEIGHT - barHeight;
    var textCoorX = CLOUD_X + PADDING + (BAR_WIDTH + BAR_GAP) * i;
    var textCoorY = BAR_TOPTEXT_Y + BAR_MAXHEIGHT - barHeight;

    if (names[i] === 'Вы') {
      barColor = 'rgba(255, 0, 0, 1)';
    }

    drawText(ctx, FONT_COLOR, Math.floor(times[i]), textCoorX, textCoorY);
    drawBar(ctx, barColor, barCoorX, barCoorY, BAR_WIDTH, barHeight)
    drawText(ctx, FONT_COLOR, names[i], textCoorX, BAR_BOTTOMTEXT_Y);
  }
};
