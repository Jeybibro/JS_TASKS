/******** #1 ********/
const numbers = [5,6,7,8,9,];
const doubleNumbers = numbers.map(function (num) {
    return num * 2;
});
console.log(doubleNumbers);


/******** #2 ********/
function myFunc(arr, value) {
    let newFun = [];
    for(let i = 0; i < arr; i++){
        newFun.push(value);
    }
    return newFun;
}
let func = myFunc(3, 'a')
console.log(func);



/******** #3 ********/
function reverseData(numbers) {
    let newData = [];
    for(let i = numbers.length - 1; i >= 0; i--){
        newData.push(numbers[i]);
    }
    return newData
}
let massiv = [1,2,3,4,5,6,7,8,9];
let data = reverseData(massiv);
console.log(data);

/*// Метод через reverse
const data = [1,2,3,4,5,6,7,8,9];
const arr = data.reverse();
console.log(arr);*/
