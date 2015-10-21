var app = require('../app');

angular.module('productsModule').controller('loginController',  loginControllerFn);

loginControllerFn.$inject = ['loginService'];

function loginControllerFn(loginService) {
	var vm = this;

	vm.login = function (username, password ) {
		console.log(username, password);
		loginService.registration(vm.userName, vm.password);
	};
}
