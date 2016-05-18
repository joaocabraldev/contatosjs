/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS.states", []);
	
	angular
	.module("contatosJS.states")
	.config(config);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
		$routeProvider
		
		.when("/states", {
			templateUrl: "modules/states/views/list.html",
			controller: "StatesCtrl"
		})
		
		.when("/states/new", {
			templateUrl: "modules/states/views/new.html",
			controller: "StatesCtrl"
		})
		
		.when("/states/:id", {
			templateUrl: "modules/states/views/details.html",
			controller: "StatesCtrl"
		})
		
		.when("/states/edit/:id", {
			templateUrl: "modules/states/views/edit.html",
			controller: "StatesCtrl"
		});
		
	}

})();