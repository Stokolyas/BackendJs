'use strict'
const catsGroupGenerate = require('./project3');
var list
  list = catsGroupGenerate(3)
// возвращение имен котов
function backCatName(list) {
    var backName = [''];
    for (var i = 0; i < list.length; i++) {
      if (list[i].name == 'Kail') {
        backName[i] = 'Kail '
      }
      if (list[i].name == 'Hell') {
        backName[i] = 'Hell '
  
      }
      if (list[i].name == 'Gary') {
        backName[i] = 'Gary '
      }
      if (list[i].name == 'John') {
        backName[i] = 'John '
      }
    }

    return backName
  }
  module.exports = backCatName;
  // старые коты    catList[i].substr(n+1,2)
  function oldCats(n) {
    var countOldCats = 0
    var menCatArr = list.filter(function (item) {
      if (item.gender == 'm') {
        return item
      }
    });
    menCatArr.forEach(function (item) {
      if (item.age > 15) {
        countOldCats += 1
      }
    });
    
    return countOldCats
  }
  module.exports = oldCats;
  // молодые кошки
function youngCats(n) {
    var nameYoungCats = []
    var womenCatArr = list.filter(function (number) {
      if (number.gender == 'w') {
        return number;
      }
    });
    womenCatArr.forEach(function (item) { 
      if (item.age < 5) {
        nameYoungCats += item.name
      }
    });
    return nameYoungCats;
  }
  backCatName(list)
  module.exports = youngCats
