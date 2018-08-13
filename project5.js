'use strict'
// счетчик имен
const catsGroupGenerate = require('./project3');
var list
  list = catsGroupGenerate(3)

function nameStats(list) {
    var countName = [0, 0, 0, 0]
    for (const item in list) {
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
    }
    
    return countName
}
nameStats(list)
module.exports = nameStats;