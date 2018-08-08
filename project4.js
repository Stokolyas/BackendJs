'use strict'
const list = require('./project3');
// возвращение имен котов
export default function backCatName(list) {
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
  // старые коты    catList[i].substr(n+1,2)
  export default  function oldCats(n) {
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
  // молодые кошки
  export default function youngCats(n) {
    var nameYoungCats = []
    var womenCatArr = list.filter(function (item) {
      if (item.gender == 'w') {
        return item
      }
    });
    womenCatArr.forEach(function (item) { 
      if (item.age < 5) {
        nameYoungCats += item.name
      }
    });
    return nameYoungCats
  }
var listName = backCatName(list) // вывод имен котов
oldCats(9)
youngCats(9)