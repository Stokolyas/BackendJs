// генератор случайных чисел
export function pick(list) {
  var max = list.length - 1
  var min = 0
  var randomPick = Math.floor(Math.random(max) * (max - min + 1)) + min;
  return list[randomPick]
}
