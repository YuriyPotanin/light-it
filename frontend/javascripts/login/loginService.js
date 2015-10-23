var app = require('../app');

angular.module('productsModule')
	.factory('loginService', loginService);

loginService.$inject = ['$resource', '$cookies','$http'];


function loginService($resource, $cookies, $http) {
	var loginMethod = {};
	// $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	// loginMethod.registration = function(username, password) {
	// 	loginObject = {
	// 		username: username,
	// 		password: password
	// 	};
	// 	console.log(loginObject);
	// 	var user = $resource("http://smktesting.herokuapp.com/api/register/");
	// 	user.save(loginObject, function(response) {
	// 		// $cookies.put('productsCoockies', response.token);
	// 		console.log(response);
	// 	});
	// };
	loginMethod.registration = function(username, password) {
		loginObject = {
			username: username,
			password: password
		};
	 $http.post('http://smktesting.herokuapp.com/api/register/', loginObject).success(function(response){
	 	$cookies.put('productsCoockies', response.token);
	 	$cookies.put('userName', loginObject.username);
	 });
	};

	loginMethod.login = function() {

	};

	loginMethod.logOut = function() {

	};

	loginMethod.isAuthorized = function() {
		console.log($cookies.get("productsCoockies"));
		if($cookies.get("productsCoockies")){
			return true;
		}else{
			return false;
			
		}
	};

	return loginMethod;
}

// ,null,{
// 			save:{ method:'POST', headers: [{'Content-Type': 'application/x-www-form-urlencoded'}] }
// 		}