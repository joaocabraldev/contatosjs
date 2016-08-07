/* global angular, $  */

/**
 * Parte principal da aplicação.
 * Inicializa todos os módulos.
 */
(function() {
	"use strict";

	angular
	.module("contatosJS", [
		"angular-loading-bar"
		, "ngRoute"
		, "ngCookies"
		, "contatosJS.controllers"
		, "contatosJS.directives"
		, "contatosJS.services"
		, "contatosJS.login"
		, "contatosJS.users"
		, "contatosJS.states"
		, "contatosJS.cities"
		, "contatosJS.contacts"
	]);

	angular
	.module("contatosJS")
	.config(config);

	config.$inject = ["$routeProvider", "cfpLoadingBarProvider"];
	/**
	 * Configura as principais rotas da aplicação.
	 * @param $routeProvider Provedor de rotas.
	 * @param cfpLoadingBarProvider Provedor da barra de loading (carragamento).
	 */
	function config($routeProvider, cfpLoadingBarProvider) {
		cfpLoadingBarProvider.parentSelector = "#loadingBar";

		$routeProvider

		.when("/", {
			templateUrl: "views/home.html",
			controller: "HomeCtrl"
		})

		.when("/about", {
			templateUrl: "views/about.html",
			controller: "AboutCtrl"
		});

	}

})();
