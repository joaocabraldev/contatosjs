/* globals angular */

(function() {
	"use strict";
	
	angular
	.module("contatosJS.controllers", []);
	
	angular
	.module("contatosJS.controllers")
	.controller("AboutCtrl", aboutCtrl)
	.controller("HomeCtrl", homeCtrl)
	.controller("NavCtrl", navCtrl);
	
	aboutCtrl.$inject = ["$scope"];
	function aboutCtrl($scope) {
		$scope.title = "Contatos Web";
		$scope.description = "Sistema de Contatos web usando AngularJS consumindo uma API RESTFull Spring Boot.";
		$scope.author = "João Antônio Cabral";
	}
	
	homeCtrl.$inject = ["$scope"];
	function homeCtrl($scope) {
		$scope.title = "Contatos Web";
		$scope.description = "Sistema de Contatos Web usando AngularJS.";
	}
	
	navCtrl.$inject = ["$scope", "$location"];
	function navCtrl($scope, $location) {		
		$scope.isActive = function(destination) {
			return destination === $location.path();
		};
	}
	
})();
