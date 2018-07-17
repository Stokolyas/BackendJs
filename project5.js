'use strict'
// счетчик имен
import {
    list
} from "./project3.js";

function nameStats(list) {
    var catName = '',
        countName = [0, 0, 0, 0]
    list.forEach(function(item) {
        for (const key in item) {
            switch (item[key]) { //обработка каждого первого символа
                case 'Kail':
                    ++countName[0]
                    break;
                case 'John':
                    ++countName[1]
                    break;
                case 'Hell':
                    ++countName[2]
                    break;
                case 'Gary':
                    ++countName[3]
                    break;
                default:

            }
        }
    });

    return countName
}
var NamesCats = nameStats(list) //счет имен котов