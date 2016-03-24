/*globals angular */

/*eslint-env browser */
angular.module("statesModule", ["ngRoute"]);

angular.module("statesModule")

.config(function($routeProvider) {
	
	$routeProvider
	
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
	});
});

angular.module("statesModule")

.controller("StatesCtrl", ["$scope", "$location", "$routeParams", "States", function($scope, $location, $routeParams, States){
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
					alert("Erro ao buscar estado." + errResponse.data);
				}
			);
		}
	};
	
	$scope.save = function(state) {
		alert("O estado a ser salvo é: " + state.name);
		alert("A sigla a ser salva é: " + state.initials);
		var myState = {
			id: null,
			name: state.name,
			initials: state.initials
		};
		alert(myState);
		States.save(myState).then(
			function(response) {
				delete $scope.state;
				alert("Estado Salvo com Sucesso!");
				$location.path("/states");
			},
			function(errorResponse){
				alert("O Estado é: " + state);
				alert("Erro ao salvar estado." + errorResponse.data.error);
			}
		);
	};
	
	getAll();
	getState();
}]);