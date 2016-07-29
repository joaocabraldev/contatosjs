/* global angular, $  */

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
	]);
	
	angular
	.module("contatosJS")
	.config(config);
	
	config.$inject = ["$routeProvider", "cfpLoadingBarProvider"];
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
