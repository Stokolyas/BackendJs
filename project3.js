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

let cat = new Cat() // создание объекта класса
catFactory() // вызов котофабрики
var list = []
list = catsGroupGenerate(999) // генерация массива котов
