//1 - 5
'use strict';
import {catFactory} from "./project2.js";
import Cat from "./project2.js";
// генерация групп котов
function catsGroupGenerate(n) {
  var catList = []
  for (var i = 0; i < n; i++) {
    let cat = new Cat()
    catList[i] = cat
  }
  return catList //возвращение массива котов
}
// возвращение имен котов
function backCatName(list) {
  var backName = [''];
  for (var i = 0; i < list.length; i++) {
    if (list[i].indexOf('Kail ') == 0) {
      backName[i] = 'Kail '
    }
    if (list[i].indexOf('Hell') == 0) {
      backName[i] = 'Hell '

    }
    if (list[i].indexOf('Gary') == 0) {
      backName[i] = 'Gary '
    }
    if (list[i].indexOf('John') == 0) {
      backName[i] = 'John '
    }
  }
  return backName
}
// старые коты    catList[i].substr(n+1,2)
function oldCats(n) {
  var catList = catsGroupGenerate(n)
  var countOldCats = 0
  var menCatArr = catList.filter(function (item) {
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
function youngCats(n) {
  var catList = catsGroupGenerate(n)
  var nameYoungCats = []
  var womenCatArr = catList.filter(function (item) {
    if (item.gender == 'w') {
      return item
    }
  });
  womenCatArr.forEach(function (item) {
    if (item.age < 5) {
      nameYoungCats += catList[item].name
    }
  });
  return nameYoungCats
}
// счетчик имен
function nameStats(list) {
  var catName = '',
    countName = [0, 0, 0, 0]
  for (var i = 0; i < list.length; i++) {
    catName = list[i]
    switch (catName[0]) { //обработка каждого первого символа
      case 'K':
        ++countName[0]
        break;
      case 'J':
        ++countName[1]
        break;
      case 'H':
        ++countName[2]
        break;
      case 'G':
        ++countName[3]
        break;
      default:

    }
  }
  return countName
}

let cat = new Cat() // создание объекта класса
catFactory() // вызов котофабрики
var list = []
list = catsGroupGenerate(999) // генерация массива котов
//var NamesCats = nameStats(list) //счет имен котов
//var listName = backCatName(["Hell 2 m 4 32", "Gary 4 w 5 12"]) // вывод имен котов
//oldCats(9)
//youngCats(9)