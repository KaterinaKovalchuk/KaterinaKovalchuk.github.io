//variable declaration. data from user
var login = prompt('Логин','');

//running script
if (login == 'admin'){
var password = prompt('Пароль', '');
	if (password == 'passw0rd'){
		alert('Welcome home!');
	} else if (password == null){
		alert('Canceled');
	} else{
		alert('Wrong password');
	}
} else if (login == null){
	alert('Canceled');
} else{
	alert('Access denied');
};
