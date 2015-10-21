var app = angular
	.module('productsModule', ['ngResource', 'ngRoute', 'ngCookies']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/login', {
		templateUrl: './login/login.html',
	}).
	otherwise({
		redirectTo: '/'
	});



});

