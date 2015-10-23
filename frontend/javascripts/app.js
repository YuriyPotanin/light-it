var app = angular
	.module('productsModule', ['ngResource', 'ngRoute', 'ngCookies','ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/login', {
		templateUrl: './login/login.html'
	}).when('/products', {
		templateUrl: './products/products.html'
	}).when('/product/ :productId', {
		templateUrl: './product/product.html'
	}).
	otherwise({
		redirectTo: '/login'
	});



});