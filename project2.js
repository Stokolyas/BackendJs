//2 task
'use strict';
const pick = require('./project1');

const catName = ['Kail', 'John', 'Hell', 'Gary']
const catGender = ['m', 'w']

module.exports = class Cat {

  constructor() {
    this.name = pick(catName)
    this.age = Math.floor(Math.random(0, 30) * (30 + 1))
    this.gender = pick(catGender)
    this.legsCount = Math.floor(Math.random(1, 4) * 4 + 1)
    this.tailLength = Math.floor(Math.random(2, 30) * (30 - 1) + 2)
  }
}

// Котофабрика
function catFactory(cat,gender) {
  cat.gender = gender
  return cat
}
module.exports = catFactory;
