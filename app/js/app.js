/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS", [
		"ngRoute"
		, "ngCookies"
		, "contatosJS.controllers"
		, "contatosJS.services"
		, "contatosJS.states"
		, "contatosJS.cities"
	]);
	
	angular
	.module("contatosJS")
	.config(config)
	.run(run);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
		$routeProvider
	
		.when("/", {
			templateUrl: "views/home.html",
			controller: "HomeCtrl"
		})
		
		.when("/login", {
			templateUrl: "login/login.html",
			controller: "LoginCtrl"
		})
		
		.when("/logout", {
			templateUrl: "login/login.html",
			controller: "LoginCtrl"
		})
		
		.when("/about", {
			templateUrl: "views/about.html",
			controller: "AboutCtrl"
		})
		
		.otherwise({
			redirectTo: "/login"
		});
		
	}
	
	run.$inject = ["$rootScope", "$location", "$cookieStore", "$http"];
	function run($rootScope, $location, $cookieStore, $http) {
		$rootScope.globals = $cookieStore.get("globals") || {};
		
		if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common["Authorization"] = "Basic " + $rootScope.globals.currentUser.authdata;
        }
        
        $rootScope.$on("$locationChangeStart", function (event, next, current) {
            if ($location.path() !== "/login" && !$rootScope.globals.currentUser) {
                $location.path("/login");
            }
        });
	}

})();