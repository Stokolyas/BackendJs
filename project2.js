//1 - 3 task
'use strict';
function pick(list){
  var max = list.length-1
  var min = 0
  var randomPick = Math.floor(Math.random(min, max) * (max - min + 1)) + min;
  return list[randomPick]
}

function catsGroupGenerate(n){
  var catList = []
  for (var i = 0; i < n; i++) {
  	let cat = new Cat ()
    catList[i] = cat.name +' ' +cat.age +' '+ cat.gender +' '+ +cat.legsCount +' '+ cat.tailLength +' '
  }
  return alert(catList)
}

class Cat {

   constructor(catName, catGender,name,age, gender, legsCount, tailLength) {
   	 catName = ['Kail','John','Hell','Garry']
     this.name = pick(catName)
     catGender = ['m','w']
     this.age = Math.floor(Math.random(0, 30) * (30 + 1))
     this.gender = pick(catGender)
     this.legsCount = Math.floor(Math.random(1, 4) * (4) + 1)
     this.tailLength = Math.floor(Math.random(2, 30) * (30 - 1) + 2)
   }

   catFactory(){
     alert('Name: ' + this.name +  ' Age:  ' + this.age + ' Gender: ' + this.gender + '  Legs: ' + this.legsCount + ' Tail: ' + this.tailLength)


   }
 }
 let cat = new Cat ()
 cat.catFactory()
 catsGroupGenerate(2)