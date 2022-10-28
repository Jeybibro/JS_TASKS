//№1
let city = prompt('„Столица Кыргызстана?“', '');
let new_city = city === 'Бишкек' ? 'Верно!' : 'Не знаете?';
alert(new_city);



//№2
let user_pass = prompt('Логин','');
if (user_pass == null){
    alert('Вход отменен');
} else if(user_pass === 'Админ'){
    user_pass = prompt('Пароль','');
    if (user_pass == null){
        alert('Вход отменен');
    } else if(user_pass === 'Черный Властелин'){
        alert('Добро пожаловать');
    } else{
        alert('Пароль неверен!');
    }
} else{
    alert('Я вас не знаю!');
}