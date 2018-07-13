//1 - 5
'use strict';
// генератор случайных чисел
function pick(list) {
  var max = list.length - 1
  var min = 0
  var randomPick = Math.floor(Math.random(min, max) * (max - min + 1)) + min;
  return list[randomPick]
}
// генерация групп котов
function catsGroupGenerate(n, gender = 'm') {
  var catList = []
  for (var i = 0; i < n; i++) {
    let cat = new Cat()
    if (cat.gender == 'w') {
      cat.gender = 'm'
    }
    catList[i] = cat.name + ' ' + cat.age + ' ' + cat.gender + ' ' + +cat.legsCount + ' ' + cat.tailLength + ' '
  }
  return catList //возвращение массива котов
}
// возвращение имен котов
function back_Cat_Name(list) {
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
  for (var i = 0; i < catList.length; i++) {
    if (catList[i].indexOf("m") > 0) {
      if (catList[i].substr(catList[i].indexOf("m") - 3, 2) > 20) {
        countOldCats++
      }

    }

  }
  return countOldCats > 0
}
// молодые кошки
function youngCats(n) {
  var catList = catsGroupGenerate(n)
  var nameYoungCats = []
  for (var i = 0; i < catList.length; i++) {
    if (catList[i].indexOf("w") > 0) {
      if (catList[i].substr(catList[i].indexOf("w") - 3, 2) > 5) {
        nameYoungCats += catList[i].substr(0, 5)
      }

    }

  }
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
// класс котов
class Cat {

  constructor(catName, catGender, name, age, gender, legsCount, tailLength) {
    catName = ['Kail', 'John', 'Hell', 'Gary']
    this.name = pick(catName)
    catGender = ['m', 'w']
    this.age = Math.floor(Math.random(0, 30) * (30 + 1))
    this.gender = pick(catGender)
    this.legsCount = Math.floor(Math.random(1, 4) * (4) + 1)
    this.tailLength = Math.floor(Math.random(2, 30) * (30 - 1) + 2)
  }

}

// Котофабрика
function catFactory(Cat, loudness = require('loudness');) {

  cat.gender = 'm'
  return cat.gender
}

let cat = new Cat() // создание объекта класса
catFactory() // вызов котофабрики
var list = []
list = catsGroupGenerate(9) // генерация массива котов
var NamesCats = nameStats(list) //счет имен котов
var listName = back_Cat_Name(list) // вывод имен котов
oldCats(9)
youngCats(9)