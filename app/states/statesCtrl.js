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
	$scope.loading = true;
	
	var getAll = function() {
		States.getAll()
		.then(
			function(response) {
				$scope.states = response.data._embedded.states;
			},
			function(errResponse) {
				console.error("Erro ao buscar estados.");
			}
		)
		.finally(function(response) {
			$scope.loading = false;
		});
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
					console.error("Erro ao buscar estado.");
				}
			);
		}
	};
	
	$scope.save = function(state) {
		var myState = {
			id: null,
			name: state.name,
			initials: state.initials
		};
		States.save(myState).then(
			function(response) {
				delete $scope.state;
				console.info("Estado Salvo com Sucesso!");
				getAll();
				$location.path("/states");
			},
			function(response){
				console.error("Erro ao salvar Estado.");
			}
		);
	};
	
	$scope.update = function(state) {
		var myState = {
			id: state.id,
			name: state.name,
			initials: state.initials
		};
		States.update(myState).then(
			function(response) {
				delete $scope.state;
				console.info("Estado atualizado com Sucesso!");
				getAll();
				$location.path("/states");
			},
			function(response){
				console.error("Erro ao atualizar Estado.");
			}
		);
	};
	
	$scope.delete = function(id) {
		States.deleteById(id).then(
			function(respose) {
				console.info("Estado removido com Sucesso!");
				getAll();
			},
			function(respose) {
				console.error("Erro ao remover Estado.");
			}
		);
	};
	
	getAll();
	getState();
}]);
