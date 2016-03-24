/*globals angular */

angular.module("contatosJS")

.controller("NavCtrl", function($scope, $location) {
	$scope.isActive = function(destination) {
		return destination === $location.path();
	};
});