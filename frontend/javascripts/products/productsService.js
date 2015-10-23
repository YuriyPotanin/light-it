var app = require('../app');

angular.module('productsModule')
	.factory('productsService', productsService);

productsService.$inject = ['$resource'];


function productsService($resource, $cookies) {
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

		var user = $resource("http://smktesting.herokuapp.com/api/reviews/" + productId);
		user.save(reviewObject, function(response) {
			callback(response);
		});
	};



	return loginMethod;
}