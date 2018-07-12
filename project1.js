var list = ['java','js','python','c++']
function pick(list){
  max = list.length
  var min = 0
  var randomPick = Math.floor(Math.random(min, max) * (max - min + 1)) + min;
  alert(list[randomPick])
}
pick(list)