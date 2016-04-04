/* globals angular */

(function() {
	"use strict";
	
	angular
	.module("contatosJS")
	.controller("NavCtrl", navCtrl);
	
	navCtrl.$inject = ["$scope", "$location"];
	function navCtrl($scope, $location) {
		$scope.isActive = function(destination) {
			return destination === $location.path();
		};
	};
})();