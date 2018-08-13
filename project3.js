//1 - 5
'use strict';
const Cat = require('./project2');
// генерация групп котов
function catsGroupGenerate(n, legsCount) {
  var list = []
  for (var i = 0; i < n; i++) {
    let cat = new Cat()
    cat.legsCount = legsCount
    list[i] = cat
  }
  return list //возвращение массива котов
}
catsGroupGenerate(4)
module.exports = catsGroupGenerate