'use strict'
// счетчик имен
const catsGroupGenerate = require('./project3');
const backCatName = require('./project4')
var list
list = catsGroupGenerate(9)

function nameStats(list) {
    var countName = new Map(), names
    countName.set('Kail', 0)
    names = backCatName(list)
    names.forEach((item) => {
        countName.forEach((value, key, countName) => {
            value = countName.get(item)
            if (value !== value) {
                value=1
            }
            countName.set(item, value)
                if (item === key){
                    value = countName.get(key)
                    countName.set(key, value+1)
                }
        })
    })
    console.log(countName)
    return countName
}
nameStats(list)
module.exports = nameStats;