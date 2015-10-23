var app = require('../app');

angular.module('productsModule').controller('productsCtrl', productsCtrlFn);
productsCtrlFn.$inject = ['productsService','loginService'];

function productsCtrlFn(productsService, loginService) {
	var mv = this;
	mv.productReviews = [];
	mv.selectedProduct = '';

	productsService.getProducts(function(products) {
		mv.products = products;
		console.log(mv.products);
	});

	mv.getProductReviews = function(productId) {
		if (loginService.isAuthorized()) {
			productsService.getProductReviews(productId, function(reviews) {
				mv.productReviews = reviews;
				console.log(mv.productReviews);
				mv.selectedProduct = productId;
			});
		}
	};
	mv.saveReview = function() {
		productsService.saveReview(mv.rate, mv.text, mv.selectedProduct, function(response) {
			console.log(response);
		});
	};
	// mv.isAuthorized = function() {
	// 	return productsService.isAuthorized();
	// };

}