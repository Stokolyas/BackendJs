//1 - 5
'use strict';
const pick = require('./project1');
const catFactory = require('./project2');
const Cat = require('./project2');
// генерация групп котов
module.exports = function catsGroupGenerate(n, legsCount = 4) {
  var catList = []
  for (var i = 0; i < n; i++) {
    let cat = new Cat()
    cat.legsCount = legsCount
    catList[i] = cat
  }
  
  return catList //возвращение массива котов
}

module.exports = list = []
list = catsGroupGenerate(9) // генерация массива котов
