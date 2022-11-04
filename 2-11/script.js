/*Задание кторое с презентации*/
function numbersMin(a, b) {
    return a < b ? a : b;
}
let result = numbersMin(10, 8);
console.log(result);

function text(result) {
    alert(result);
}
text(result);

//№1
const hello() {
    return '«Привет, JavaScript!»';
}
const result = hello();
alert(result);

//№2
function cube(num) {
    alert(num ** 3);
}
cube(5);


//№3

function getName(name = ' гость') {
    alert(`Привет, ${name}`);
}
getName('Вася');