/* Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние
возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый).
Например. 33 – зрелый */

"use strict";

function ageFunction(){
    for(let age = 1; age < 100; age++) {
        if(age >= 1 && age <= 17) {
            console.log(`${age} – ребёнок`);
        } else if(age >= 18 && age < 30) {
            console.log(`${age} – молодой`);
        } else if(age >= 30 && age <= 55) {
            console.log(`${age} – зрелый`);
        } else console.log(`${age} – старый`);
    }
}

ageFunction();