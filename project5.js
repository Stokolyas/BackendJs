'use strict'
// счетчик имен
import {list} from "./project3.js";
function nameStats(list) {
    console.log(list)
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
    console.log(countName)
    return countName
  }
  var NamesCats = nameStats(list) //счет имен котов
