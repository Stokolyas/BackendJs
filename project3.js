//1 - 5
'use strict';
import {catFactory} from "./project2.js";
import Cat from "./project2.js";
// генерация групп котов
export function catsGroupGenerate(n, legsCount = 4) {
  var catList = []
  for (var i = 0; i < n; i++) {
    let cat = new Cat()
    cat.legsCount = legsCount
    catList[i] = cat
  }
  
  return catList //возвращение массива котов
}

export var list = []
list = catsGroupGenerate(9) // генерация массива котов
