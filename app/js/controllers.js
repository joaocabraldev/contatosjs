/* globals angular */

/**
 * Controladores gerais da aplicação.
 */
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
	/**
	 * Controlador Sobre.
	 * @param $scope Escopo da aplicação.
	 */
	function aboutCtrl($scope) {
		$scope.title = "Contatos Web";
		$scope.description = "Sistema de Contatos web usando AngularJS consumindo uma API RESTFull Spring Boot.";
		$scope.author = "João Antônio Cabral";
	}

	homeCtrl.$inject = ["$scope"];
	/**
	 * Controlador Home.
	 * @param $scope Escopo da aplicação.
	 */
	function homeCtrl($scope) {
		$scope.title = "Contatos Web";
		$scope.description = "Sistema de Contatos Web usando AngularJS.";
	}

	navCtrl.$inject = ["$scope", "$location"];
	/**
	 * Controlador de Navegação.
	 * @param $scope Escopo da aplicação.
	 * @param $location Localização da aplicação.
	 */
	function navCtrl($scope, $location) {

		/**
		 * Verifica se a localização é a atual.
		 */
		$scope.isActive = function(destination) {
			return destination === $location.path();
		};

		$scope.messages = [];

	}

})();
