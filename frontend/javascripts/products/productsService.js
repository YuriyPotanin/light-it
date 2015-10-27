var app = require('../app');

angular.module('productsModule')
	.factory('productsService', productsService);

productsService.$inject = ['$resource', '$http','$cookies'];


function productsService($resource, $http, $cookies) {
	var loginMethod = {};

	loginMethod.getProducts = function(callback) {

		var user = $resource("http://smktesting.herokuapp.com/api/products/");
		user.query(function(response) {
			callback(response);
		});
	};

	loginMethod.getProductReviews = function(productId, callback) {

		var user = $resource("http://smktesting.herokuapp.com/api/reviews/" + productId);
		user.query(function(response) {
			callback(response);
		});
	};

	loginMethod.saveReview = function(rate, text, productId, callback) {
		reviewObject = {
			rate: rate,
			text: text
		};
		$http.post('http://smktesting.herokuapp.com/api/reviews/' + productId,reviewObject, {headers: {'Authorization':"Basic " +$cookies.get("productsCoockies")}
}).success(function(response) {

		});
	};



	return loginMethod;
}