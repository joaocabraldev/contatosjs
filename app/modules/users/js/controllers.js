/*globals angular */

(function() {
	angular
	.module("contatosJS.users")
	.controller("UsersCtrl", usersCtrl);
	
	usersCtrl.$inject = ["$scope", "$location", "$routeParams", "Users"];
	function usersCtrl($scope, $location, $routeParams, Users) {
		$scope.user = [];
		$scope.users = [];
		$scope.loading = true;
		
		var getAll = function() {
			Users.getAll()
			.then(
				function(response) {
					$scope.users = response.data._embedded.systemUsers;
				},
				function(errResponse) {
					console.error("Erro ao buscar usuários.");
				}
			)
			.finally(function(response) {
				$scope.loading = false;
			});
		};
		
		var getUser = function() {
			var id = $routeParams.id;
			if (id !== undefined) {
				Users.getById(id)
				.then(
					function(response) {
						$scope.user = response.data;
					},
					function(errResponse) {
						console.error("Erro ao buscar usuário.");
					}
				);
			}
		};
		
		$scope.save = function(user) {
			var myUser = {
				id: null,
				name: user.name,
				initials: user.initials
			};
			Users.save(myUser).then(
				function(response) {
					delete $scope.user;
					console.info("Usuário Salvo com Sucesso!");
					getAll();
					$location.path("/users");
				},
				function(response){
					console.error("Erro ao salvar Usuário.");
				}
			);
		};
		
		$scope.update = function(user) {
			var myUser = {
				id: user.id,
				name: user.name,
				initials: user.initials
			};
			Users.update(myUser).then(
				function(response) {
					delete $scope.user;
					console.info("Usuário atualizado com Sucesso!");
					getAll();
					$location.path("/users");
				},
				function(response){
					console.error("Erro ao atualizar Usuário.");
				}
			);
		};
		
		$scope.delete = function(id) {
			Users.deleteById(id).then(
				function(respose) {
					console.info("Usuário removido com Sucesso!");
					getAll();
				},
				function(respose) {
					console.error("Erro ao remover Usuário.");
				}
			);
		};
		
		(function init() {
			getAll();
			getUser();
		})();
	}
})();