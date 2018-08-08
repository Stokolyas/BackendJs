//1 - 5
'use strict';
import pick from "./project1";
import catFactory from "./project2";
import Cat from "./project2";
// генерация групп котов
export default function catsGroupGenerate(n, legsCount = 4) {
  var catList = []
  for (var i = 0; i < n; i++) {
    let cat = new Cat()
    cat.legsCount = legsCount
    catList[i] = cat
  }
  
  return catList //возвращение массива котов
}

export default list = []
list = catsGroupGenerate(9) // генерация массива котов
