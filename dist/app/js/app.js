/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS", [
		"ngRoute"
		, "ngCookies"
		, "contatosJS.controllers"
		, "contatosJS.services"
		, "contatosJS.login"
		, "contatosJS.users"
		, "contatosJS.states"
		, "contatosJS.cities"
	]);
	
	angular
	.module("contatosJS")
	.config(config);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
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