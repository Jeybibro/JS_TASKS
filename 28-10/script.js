//№1

let x = +prompt('Вводите цифру','')

x = x === 7 ? 'Верно!' : 'Не верно';
alert(x);

//№2

let a = 5;
let b = 6;
if (a <= 1 || b >= 3){
    alert(a+b);
} else{
    alert(a-b);
}

//№3

let min = +prompt("Введите ваше число от 0 до 59");
if (min >= 0 && min <= 14) {
    alert('Первая');
} else if (min >= 15 && min <= 30) {
    alert('Вторая');
} else if (min >= 31 && min <= 45) {
    alert('Третья');
} else if (min >= 46 && min <= 59) {
    alert('Четвертая');
} else{
    alert('Значение не попадает в диапазон от 0 до 59');
}