/*globals angular */

(function() {
	angular
	.module("contatosJS.cities")
	.controller("CitiesCtrl", citiesCtrl);
	
	citiesCtrl.$inject = ["$scope", "$location", "$routeParams", "Cities"];
	function citiesCtrl($scope, $location, $routeParams, Cities) {
		$scope.city = [];
		$scope.cities = [];
		$scope.loading = true;
		
		var getAll = function() {
			/*
			Cities.getAll()
			.then(
				function(response) {
					$scope.cities = response.data._embedded.cities;
				},
				function(errResponse) {
					console.error("Erro ao buscar cidades.");
				}
			)
			.finally(function(response) {
				$scope.loading = false;
			}); 
			*/
			
			$scope.cities = [
		        {
			        id: "1",
			        name: "Goiânia",
			        capital: true,
			        state: {
		                id : "1",
                        name : "Goiás",
                        initials : "GO"
			        }
		        }, {
			        id: "2",
			        name: "Dourados",
			        capital: false,
			        state: {
		                id : "3",
                        name : "Mato Grosso do Sul",
                        initials : "MS"
			        }
		        },
		    ];
		    
		    $scope.loading = false;
		};
		
		var getCity = function() {
			var id = $routeParams.id;
			if (id !== undefined) {
			    $scope.city = $scope.cities[id];
			    
			    /*
				Cities.getById(id)
				.then(
					function(response) {
						$scope.cities = response.data;
					},
					function(errResponse) {
						console.error("Erro ao buscar cidade.");
					}
				);
				*/
			}
		};
		
		$scope.save = function(city) {
			var myCity = {
				id: null,
				name: city.name,
				capital: city.capital,
				state: city.state
			};
			Cities.save(myCity).then(
				function(response) {
					delete $scope.city;
					console.info("Cidade Salva com Sucesso!");
					getAll();
					$location.path("/cities");
				},
				function(response){
					console.error("Erro ao salvar Cidade.");
				}
			);
		};
		
		$scope.update = function(city) {
			var myCity = {
				id: city.id,
				name: city.name,
				capital: city.capital,
				state: city.state
			};
			Cities.update(myCity).then(
				function(response) {
					delete $scope.city;
					console.info("Cidade Atualizada com Sucesso!");
					getAll();
					$location.path("/cities");
				},
				function(response){
					console.error("Erro ao atualizar Cidade.");
				}
			);
		};
		
		$scope.delete = function(id) {
			Cities.deleteById(id).then(
				function(respose) {
					console.info("Cidade removida com Sucesso!");
					getAll();
				},
				function(respose) {
					console.error("Erro ao remover Cidade.");
				}
			);
		};
		
		(function init() {
			getAll();
			getCity();
		})();
	}
})();