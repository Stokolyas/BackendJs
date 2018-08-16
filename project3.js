//1 - 5
'use strict';
const Cat = require('./project2');
// генерация групп котов
function catsGroupGenerate(n, defaults) {
  var list = []
  for (var i = 0; i < n; i++) {
    let cat = new Cat()
    //cat.legsCount = defaults
    list.push(cat)
  }
  return list //возвращение массива котов
}
catsGroupGenerate(4)
module.exports = catsGroupGenerate