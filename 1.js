/* Дан массив с числами. Запишите в новый массив только те числа, которые
больше нуля и меньше 10-ти. Для этого используйте вспомогательную
функцию isNumberInRange, которая параметром принимает число и
проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция
возвращает true, если не так - false. */

"use strict";

let numbers = [1, 2, 3, 55, 69, 15];
let numbersTrue = [];

for(let i = 0; i < numbers.length; i++) {
    if(isNumberInRange(numbers[i])){
        numbersTrue.push(numbers[i]);
    }
}

function isNumberInRange(number) {
    if(number < 10 && number > 0){
        return true;
    } else {
        return false;
    }
}


console.log(numbersTrue);
console.log(isNumberInRange(3));
