/******* №1 *******/

const numbers = [1,2,5,6,88,5];

let sum = 0;
for (let key in numbers) {
    sum += numbers[key];
}
console.log(sum);
//sum 0 + 1 = 1;
//sum 1 + 2 = 3;
//sum 3 + 5 = 8;
//sum 8 + 6 = 14;
//sum 14 + 88 = 102;
//sum 102 + 5 = 107;
//sum = 107;

/******* №2 *******/
const number = [2,2,3,4,5,4,7,8,6,6];
const newNumber = [];
let sum2 = 0;
for(let i = 0; i < number.length; i++){
    let square = number[i] * number [i];
    newNumber.push(square);
}
console.log(newNumber);
for (let j = 0; j < newNumber.length; j++){
    sum2 += newNumber[j];
}
console.log(sum2);



/******* №3 *******/
const numbers3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const newArray = [];

for (let i = 2; i <= 20; i++){
    if (i % 2 === 0){
    newArray.push(i);
    }
}
console.log(newArray);
