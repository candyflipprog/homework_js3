/* Напишите функцию, которая убирает повторяющиеся значения. */
"use strict";

let array = [1, 2, 2, 33, -33, 33];

function removeDuplicates(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (result.indexOf(array[i]) === -1) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(removeDuplicates(array));