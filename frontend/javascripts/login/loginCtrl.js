var app = require('../app');

angular.module('productsModule').controller('loginController', loginControllerFn);

loginControllerFn.$inject = ['loginService'];

function loginControllerFn(loginService) {
	var mv = this;

	mv.registration = function(username, password) {

		if (mv.password !== "" && mv.userName !== "") {
			loginService.registration(mv.userName, mv.password);
			mv.userName = "";
			mv.password = "";
		} else {
			alert('enter userName or password');
		}
	};

	mv.login = function(username, password) {
		if (mv.password !== "" && mv.userName !== "") {
			loginService.login(mv.userName, mv.password);
			mv.userName = "";
			mv.password = "";
		} else {
			alert('enter userName or password');
		}
	};
	mv.toProducts = function() {
		loginService.redirectProducts();
	};
}