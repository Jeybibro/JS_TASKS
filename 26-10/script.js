/*Первое задание*/
let num = 10;
++num;
num++;
--num;
console.log(num);

/*Второе задание*/
let num1 = 47;
num1 += 7;
num1 -= 18;
num1 *= 10;
num1 /= 15;
alert(num1);

/*Третее задание*/
let num2 = 1;
num2 += 12;
num2 -= 14;
num2 *= 5;
num2 /= 7;
num2++;
num2--;
alert(num2);


/********** && ************/
//true + true = true;
let user_age = 25;
let user_name = 'Sasha';
let result = user_age > 18 && user_name === 'Sasha';
console.log(result);

//false + false = false;
let age = 14;
let name = 'Baha';
let result1 = age > 18 && name === 'Joni';
console.log(result1);

//true + false = false;
let ages = 18;
let names = 'Baha';
let result2 = ages >= 18 && names === 'Bahtiyr';
console.log(result2);

//false + true = false;
let ages1 = 15;
let names1 = 'Baha';
let result3 = ages1 >= 18 && names1 === 'Baha';
console.log(result3);


/********** || (или) ************/
//false + false = false;
let age1 = 17;
let name1 = 'Sasha';
let result4 = age1 >= 18 || name1 === 'Baha';
console.log(result4);

//true + false = true;
let age2 = 17;
let name2 = 'Sasha';
let result5 = age2 <= 18 || name2 === 'Baha';
console.log(result5);

//false + true = true;
let age3 = 17;
let name3 = 'Baha';
let result6 = age3 >= 18 || name3 === 'Baha';
console.log(result6);

//true + true = true;
let age4 = 18;
let name4 = 'Baha';
let result7 = age4 === 18 || name4 === 'Baha';
console.log(result7);

