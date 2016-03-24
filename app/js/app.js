/*globals angular */

angular.module("contatosJS", ["ngRoute", "statesModule"]);

angular.module("contatosJS")

.config(function($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);
	
	$routeProvider
	
	.when("/", {
		templateUrl: "pages/home.html",
		controller: "HomeCtrl"
	})
	
	.when("/about", {
		templateUrl: "pages/about.html",
		controller: "AboutCtrl"
	})
	
	.otherwise({
		redirectTo: "/"
	});
});

angular.module("contatosJS")

.value("config", {
	baseUrl: "https://contatosweb.herokuapp.com/rest" 
});