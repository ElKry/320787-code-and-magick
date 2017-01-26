'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = Math.round(times[i]);
    if (time > max) {
      max = time;
    }
  }

  var myNumber = names.indexOf('Вы');
  var histoHeight = 150;
  var step = histoHeight / (max / 1000);
  var startX = 120;
  var columnIndent = 90;

  for (i = 0; i < names.length; i++) {
    var name = names[i];
    var height = parseInt(step * time / 1000, 10);
    var histoX = startX + columnIndent * i;
    time = Math.round(times[i]);

    if (i !== myNumber) {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (parseInt(Math.random() * 10, 10) / 10 + 0.1) + ')';
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(histoX, 250 - height, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX, 270);
    ctx.fillText(time + ' мс', histoX, 240 - height);
  }
};
