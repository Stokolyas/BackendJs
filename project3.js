//1 - 5
'use strict';
const Cat = require('./project2');
// генерация групп котов
function catsGroupGenerate(n, legsCount = 4) {
  var list = []
  for (var i = 0; i < n; i++) {
    let cat = new Cat()
    cat.legsCount = legsCount
    list[i] = cat
  }

  return list //возвращение массива котов
}

module.exports = catsGroupGenerate