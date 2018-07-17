'use strict'
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
//var listName = backCatName(["Hell 2 m 4 32", "Gary 4 w 5 12"]) // вывод имен котов
//oldCats(9)
//youngCats(9)