/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS.login", []);
	
	angular
	.module("contatosJS.login")
	.config(config)
	.run(run);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
		$routeProvider
		
		.when("/login", {
			templateUrl: "modules/login/views/login.html",
			controller: "LoginCtrl"
		})
		
		.when("/logout", {
			templateUrl: "modules/login/views/login.html",
			controller: "LoginCtrl"
		});
		
	}
	
	run.$inject = ["$rootScope", "$location", "$cookieStore", "$http"];
	function run($rootScope, $location, $cookieStore, $http) {
		$rootScope.infoMessages = [];
		$rootScope.errorMessages = [];
		$rootScope.sucessMessages = [];
		
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
