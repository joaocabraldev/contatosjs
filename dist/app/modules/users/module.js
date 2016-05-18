/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS.users", []);
	
	angular
	.module("contatosJS.users")
	.config(config);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
		$routeProvider
		
		.when("/users", {
			templateUrl: "modules/users/views/list.html",
			controller: "UsersCtrl"
		})
		
		.when("/users/new", {
			templateUrl: "modules/users/views/new.html",
			controller: "UsersCtrl"
		})
		
		.when("/users/:id", {
			templateUrl: "modules/users/views/details.html",
			controller: "UsersCtrl"
		})
		
		.when("/users/edit/:id", {
			templateUrl: "modules/users/views/edit.html",
			controller: "UsersCtrl"
		});
		
	}

})();