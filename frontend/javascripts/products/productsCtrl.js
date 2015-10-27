var app = require('../app');

angular.module('productsModule').controller('productsCtrl', productsCtrlFn);
productsCtrlFn.$inject = ['productsService', 'loginService'];

function productsCtrlFn(productsService, loginService) {
	var mv = this;
	mv.productReviews = [];
	mv.selectedProduct = '';


	productsService.getProducts(function(products) {
		mv.products = products;
	});

	mv.getProductReviews = function(productId) {
		if (loginService.isAuthorized()) {
			productsService.getProductReviews(productId, function(reviews) {
				mv.productReviews = reviews;
				mv.selectedProduct = productId;
			});
		}
	};

	mv.toLogin = function() {
		loginService.redirectToLogin();
	};

	mv.saveReview = function() {
		if (mv.rate && mv.text !== "") {
			productsService.saveReview(mv.rate, mv.text, mv.selectedProduct, function(response) {});
		} else {
			alert("enter text and rating");
		}
	};
	mv.logout = function() {
		if (loginService.isAuthorized()) {
			loginService.logOut();
		}
	};



}