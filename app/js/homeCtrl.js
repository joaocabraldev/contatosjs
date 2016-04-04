/* globals angular */

(function () {
	"use strict";
	
	angular
	angular.module("contatosJS")
	.controller("HomeCtrl", homeCtrl);
	
	homeCtrl.$inject = ["$scope"];
	function homeCtrl($scope) {
		$scope.title = "Contatos Web";
		$scope.description = "Sistema de Contatos Web usando AngularJS.";
	};
})();