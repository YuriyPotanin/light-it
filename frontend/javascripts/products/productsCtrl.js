var app = require('../app');

angular.module('productsModule').controller('productsCtrl', productsCtrlFn);
productsCtrlFn.$inject = ['productsService', 'loginService', "$cookies"];

function productsCtrlFn(productsService, loginService, $cookies) {
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

			productsService.saveReview(mv.rate, mv.text, mv.selectedProduct, function(response) {
				if(response.success){
					var username = $cookies.get('userName');
					newReview = {
						created_at: new Date(),
						product: mv.selectedProduct,
						text: mv.text,
						rate: mv.rate,
					};
					mv.productReviews.push(newReview);
				}
			});
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