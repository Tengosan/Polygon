var drawSpace = new SVG('polygonGrid').size('100%', '100%');
var polygon = drawSpace.polygon().draw().attr({ fill: '#ffffff', stroke: "black" });

function stopDrawing(e) {
  if (e.keyCode == 13) {
    polygon.draw('done');
    polygon.off('drawstart');
    document.removeEventListener("keydown", stopDrawing);
  }
}

polygon.on('drawstart', function () {
  document.addEventListener('keydown', stopDrawing);
});

polygon.on('drawdone', function () {
  drawSpace.on("click", function (e) {
    var x = e.offsetX;
    var y = e.offsetY;

    var array = polygon.array();
    var points = [];

    for (var i = 0; i < array.value.length; i++) {
      var point = {
        x: array.value[i][0],
        y: array.value[i][1]
      };

      points.push(point);
    }

    if (inPoly(x, y, points) == true) {
      drawSpace.circle(10).attr({ fill: '#7FFF00', cx: x, cy: y });
    }
    else {
      drawSpace.circle(10).attr({ fill: '#black', cx: x, cy: y });
    }
  });
});
