//2 task
'use strict';
const pick = ('./project1');

const catName = ['Kail', 'John', 'Hell', 'Gary']
const catGender = ['m', 'w']

class Cat {

  constructor() {
    this.name = pick(catName)
    this.age = Math.floor(Math.random(0, 30) * (30 + 1))
    this.gender = pick(catGender)
    this.legsCount = Math.floor(Math.random(1, 4) * 4 + 1)
    this.tailLength = Math.floor(Math.random(2, 30) * (30 - 1) + 2)
  }
}

// Котофабрика
function catFactory(gender,age,name) {
  cat.gender = gender
  
  return cat
}
export {catFactory};
let cat = new Cat() // создание объекта класса
catFactory(gender = 'm') // вызов котофабрики