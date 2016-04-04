/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS", ["ngRoute" , "ngCookies"])
		
	.value("config", {
		baseUrl: "https://contatosweb.herokuapp.com/rest"
	})
	
	.config(config)
	.run(run);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
		$routeProvider
	
		.when("/", {
			templateUrl: "pages/home.html",
			controller: "HomeCtrl"
		})
		
		.when("/login", {
			templateUrl: "login/login.html",
			controller: "LoginCtrl"
		})
		
		.when("/states", {
			templateUrl: "states/list.html",
			controller: "StatesCtrl"
		})
		
		.when("/states/new", {
			templateUrl: "states/new.html",
			controller: "StatesCtrl"
		})
		
		.when("/states/:id", {
			templateUrl: "states/details.html",
			controller: "StatesCtrl"
		})
		
		.when("/states/edit/:id", {
			templateUrl: "states/edit.html",
			controller: "StatesCtrl"
		})
		
		.when("/about", {
			templateUrl: "pages/about.html",
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