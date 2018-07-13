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
function catsGroupGenerate(n, name = 'Luis') {
  var catList = []
  for (var i = 0; i < n; i++) {
    let cat = new Cat()
    if (cat.name == 'Kail') {
      cat.name = name
    }
    catList[i] = cat.name + ' ' + cat.age + ' ' + cat.gender + ' ' + +cat.legsCount + ' ' + cat.tailLength + ' '
  }
  return catList//возвращение массива котов
}
// возвращение имен котов
function back_Cat_Name(list) {
  var backName = [];
  for (var i = 0; i < list.length; i++) {
    if (list[0].indexOf('Kail') == 0) {
      backName[i] += 'Kail'
    }
    if (list[0].indexOf('Hell') == 0) {
      backName[i] += 'Hell '
    }
    if (list[0].indexOf('Garry') == 0) {
      backName[i] += 'Garry '
    }
    if (list[0].indexOf('John') == 0) {
      backName[i] += 'John '
    }
  }
  return backName
}
// старые коты    catList[i].substr(n+1,2)
function oldCats(n) {
  var catList = list
  var countOldCats = 0
  for (var i = 0; i < catList.length; i++) {
    if (catList[i].indexOf("m") > 0) {
      if (catList[i].substr(catList[i].indexOf("m") - 3, 2) > 20) {
        countOldCats++
      }

    }

  }
  return countOldCats
}
// молодые кошки
function youngCats(n) {
  var catList = list
  var countYoungCats = 0
  for (var i = 0; i < catList.length; i++) {
    if (catList[i].indexOf("w") > 0) {
      if (catList[i].substr(catList[i].indexOf("w") - 3, 2) > 5) {
        countYoungCats++
      }

    }

  }
  return countYoungCats
}
// счетчик имен
function nameStats(list) {
  var catName = '',
    nameKail = 0,
    nameJohn = 0,
    nameHell = 0,
    nameGarry = 0;
  for (var i = 0; i < list.length; i++) {
    catName = list[i]
    switch (catName[0]) { //обработка каждого первого символа
      case 'K':
        ++nameKail
        break;
      case 'J':
        ++nameJohn
        break;
      case 'H':
        ++nameHell
        break;
      case 'G':
        ++nameGarry
        break;
      default:

    }
  }
  return('Name Kail ' + nameKail + ' Name Jonh ' + nameJohn + ' Name Garry ' + nameGarry + ' Name Hell ' + nameHell)
}
// класс котов
class Cat {

  constructor(catName, catGender, name, age, gender, legsCount, tailLength) {
    catName = ['Kail','John','Hell','Garry']
    this.name = pick(catName)
    catGender = ['m','w']
    this.age = Math.floor(Math.random(0, 30) * (30 + 1))
    this.gender = pick(catGender)
    this.legsCount = Math.floor(Math.random(1, 4) * (4) + 1)
    this.tailLength = Math.floor(Math.random(2, 30) * (30 - 1) + 2)
  }

}

// Котофабрика
function catFactory(Cat){
  cat.gender = 'm'
  return cat.gender
}

let cat = new Cat() // создание объекта класса
catFactory() // вызов котофабрики
var list = catsGroupGenerate(999) // генерация массива котов
var NamesCats = nameStats(list) //счет имен котов
var listName = back_Cat_Name(list) // вывод имен котов
alert(catsGroupGenerate(999).length)
oldCats(9)
youngCats(9)