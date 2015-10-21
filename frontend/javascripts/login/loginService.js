var app = require('../app');

angular.module('productsModule')
	.factory('loginService', loginService);

loginService.$inject = ['$resource', '$cookies'];


function loginService($resource, $cookies) {
	var loginMethod = {};

	loginMethod.registration = function(username, password) {
		loginObject={
			 username:username,
			 password:password
		};
					console.log(loginObject);
		var user = $resource("http://smktesting.herokuapp.com/api/register/");
		user.save(loginObject, function(response) {
			// $cookies.put('productsCoockies', response.token);
			// console.log(response);
		});
	};

	loginMethod.login = function() {

	};

	loginMethod.logOut = function() {

	};

	loginMethod.isAuthorization = function() {

	};

	return loginMethod;
}