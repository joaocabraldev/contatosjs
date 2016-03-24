/*globals angular */

/*eslint-env browser */
angular.module("statesModule", ["ngRoute"]);

angular.module("statesModule")

.config(function($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
	
	$routeProvider
	
	.when("/states", {
		templateUrl: "states/list.html",
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
	
	.when("/states/new", {
		templateUrl: "states/new.html",
		controller: "StatesCtrl"
	})
	
	.otherwise({
		redirectTo: "/states"
	});
});

angular.module("statesModule")

.controller("StatesCtrl", ["$scope", "$routeParams", "States", function($scope, $routeParams, States){
	$scope.state = [];
	$scope.states = [];
	
	var getAll = function() {
		States.getAll()
		.then(
			function(response) {
				$scope.states = response.data;
			},
			function(errResponse) {
				alert("Erro ao buscar estados." + errResponse);
			}
		);
	};
	
	var getState = function() {
		var id = $routeParams.id;
		if (id !== undefined) {
			States.getById(id)
			.then(
				function(response) {
					$scope.state = response.data;
				},
				function(errResponse) {
					alert("Erro ao buscar estado." + errResponse);
				}
			);
		}
	};
	
	getAll();
	getState();
}]);