/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS.cities", []);
	
	angular
	.module("contatosJS.cities")
	.config(config);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
		$routeProvider
		
		.when("/cities", {
			templateUrl: "modules/cities/views/list.html",
			controller: "CitiesCtrl"
		})
		
	}

})();