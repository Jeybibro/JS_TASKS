/***** №1 *****/
const userSalaries = {
    Ella: 50000,
    Sophia:45000,
    Ellie:49000
};
let salaryElla = userSalaries.Ella;
let salarySophia = userSalaries.Sophia;
console.log(salaryElla, salarySophia);


/***** №2 *****/
//Через цикл for ... in
const obj = {
    a:5,  //sum 0 + a:5 = 5
    b:6,  //sum 5 + b:6 = 11
    c:10  //sum 11 + c:10 = 21
    // sum = 21
}

let sum = 0;
for (let key in obj) {
    sum += obj[key];
}
console.log(sum);


/***** №3 *****/
let data = 5;
let number;
number = data ? 3 : 5;
console.log(number);
