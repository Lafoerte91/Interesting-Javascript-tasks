/*
Дано целое число. Разбейте его на случайное количество целых чисел так, чтобы в сумме они давали это число. Пример: 100 можно разбить на 50+50, или 51+49, или 20+30+50. Количество фрагментов должно быть любым, случайным, сами фрагменты тоже должны быть случайными.
*/

const num = 100

let result = []
let sum

for(let i = 0; i < 1000; i++)  {
  const random = Math.floor(Math.random() * 100) - 1 // получаем случайное число от 1 по 99
  result.push(random) // добавляем его в результирующий массив
  sum = result.reduce((a, b) => a + b) // считаем сумму
  if(sum == num) { // если сумма равна числу
    console.log(result.join(' + '))
  }
  if(sum > 100) { //  если сумма больше 100
    result = [] // очищаем массив
  }
}