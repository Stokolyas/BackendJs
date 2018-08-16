'use strict'
const catsGroupGenerate = require('./project3');
var list
  list = catsGroupGenerate(3)
  // возвращение имен котов
function backCatName(list) {
    var backName = [];
    list.forEach(function (item){
      backName.push(item.name)
    });
    return backName
  }

  
  // старые коты    catList[i].substr(n+1,2)
  function oldCats(list) {
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
function youngCats(list) {
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
var name = backCatName(list)
module.exports = backCatName,youngCats,oldCats;
