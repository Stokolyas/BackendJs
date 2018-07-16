//2 task
'use strict';
import {pick} from "./project1.js";

const catName = ['Kail', 'John', 'Hell', 'Gary']
const catGender = ['m', 'w']

export default class Cat {

  constructor() {
    this.name = pick(catName)
    this.age = Math.floor(Math.random(0, 30) * (30 + 1))
    this.gender = pick(catGender)
    this.legsCount = Math.floor(Math.random(1, 4) * 4 + 1)
    this.tailLength = Math.floor(Math.random(2, 30) * (30 - 1) + 2)
  }
}

// Котофабрика
export function catFactory() {

  return cat
}

let cat = new Cat() // создание объекта класса
catFactory() // вызов котофабрики