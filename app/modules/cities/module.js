/* global angular, $  */

/**
 * Módulo de Cidades.
 */
(function() {
	"use strict";

	angular
	.module("contatosJS.cities", []);

	angular
	.module("contatosJS.cities")
	.config(config);

	config.$inject = ["$routeProvider"];
	/**
	 * Configuração de rotas do múdulo de Cidades.
	 * @param $routeProvider Provedor de rotas.
	 */
	function config($routeProvider) {
		$routeProvider

		.when("/cities", {
			templateUrl: "modules/cities/views/list.html",
			controller: "CitiesCtrl"
		})

		.when("/cities/new", {
			templateUrl: "modules/cities/views/new.html",
			controller: "CitiesCtrl"
		})

		.when("/cities/:id", {
			templateUrl: "modules/cities/views/details.html",
			controller: "CitiesCtrl"
		})

		.when("/cities/edit/:id", {
			templateUrl: "modules/cities/views/edit.html",
			controller: "CitiesCtrl"
		});

	}

})();
