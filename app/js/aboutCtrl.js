/* globals angular */

(function() {
	"use strict";
	
	angular
	.module("contatosJS")
	.controller("AboutCtrl", aboutCtrl);
	
	aboutCtrl.$inject = ["$scope"];
	function aboutCtrl($scope) {
		$scope.title = "Contatos Web";
		$scope.description = "Sistema de Contatos web usando AngularJS consumindo uma API RESTFull Spring Boot.";
		$scope.author = "João Antônio Cabral";
	};
})();