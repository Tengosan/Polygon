/**
 * inPoly(x, y) проверяет принадлежность точки полигону
 * @param {number} x - координата X точки
 * @param {number} y - координата Y точки
 * @param {Array} points - массив точек полигона
 * @return {boolean} true - точка принадлежит полигону, false - точка не принадлежит полигону
 */
function inPoly(x, y, points) {
  var result = false;
  for (var i = 0, j = points.length - 1; i < points.length; i++) {
    if ((((points[i].y <= y) && (y < points[j].y)) || ((points[j].y <= y) && (y < points[i].y)))
      && (x > (points[j].x - points[i].x) * (y - points[i].y) / (points[j].y - points[i].y) + points[i].x)) {
      result = !result
    }
    j = i;
  }
  return result;
}