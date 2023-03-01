/* Напишите функцию, которая очищает массив от
нежелательных значений, таких как false, undefined, пустые
строки, ноль, null. */
"use strict";

let array = ["Ivan", false, true, undefined, "", 15, "Aleksey", 92, 30, 0, null];
let result = [];

function clearArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false || array[i] === undefined || array[i] === "" || array[i] === null || array[i] === 0) {
            result.push(array[i]);
            array.splice(i, 4);
        }
    }
    return result;
}
console.log(clearArray(array));
console.log(array);