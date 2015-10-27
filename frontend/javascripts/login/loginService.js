var app = require('../app');

angular.module('productsModule')
	.factory('loginService', loginService);

loginService.$inject = ['$resource', '$cookies', '$http', '$location'];


function loginService($resource, $cookies, $http, $location) {
	var loginMethod = {};

	loginMethod.registration = function(username, password) {
		loginObject = {
			username: username,
			password: password
		};
		$http.post('http://smktesting.herokuapp.com/api/register/', loginObject).success(function(response) {

			if (response.token) {
				$cookies.put('productsCoockies', response.token);
				$cookies.put('userName', loginObject.username);
				$location.path('/products');

			} else {
				alert(response.message);
			}
		});
	};
	loginMethod.login = function(username, password) {
		loginObject = {
			username: username,
			password: password
		};
		$http.post('http://smktesting.herokuapp.com/api/login/', loginObject).success(function(response) {
			if (response.token) {
				$cookies.put('productsCoockies', response.token);
				$cookies.put('userName', loginObject.username);
				$location.path('/products');

			}
		});
	};



	loginMethod.logOut = function() {
		if (confirm("do you want to log out?")) {
			$cookies.remove('productsCoockies');
			$cookies.remove('userName');
			$location.path('/login');
		}
	};


	loginMethod.isAuthorized = function() {
		if ($cookies.get("productsCoockies")) {
			return true;
		} else {
			return false;


		}
	};

	loginMethod.redirectToLogin = function() {
		$location.path('/login');
	};

	loginMethod.redirectProducts = function() {
		$location.path('/products');
	};

	return loginMethod;
}