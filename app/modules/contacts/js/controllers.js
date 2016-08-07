/*globals angular */

(function () {
    "use strict";

	angular
	.module("contatosJS.contacts")
	.controller("ContactsCtrl", contactsCtrl);

	contactsCtrl.$inject = ["$scope", "$location", "$routeParams", "Contacts", "States"];
	function contactsCtrl($scope, $location, $routeParams, Contacts, States) {
		$scope.contact = [];
		$scope.contacts = [];
		$scope.loading = true;

		var getAll = function() {
			Contacts.getAll()
			.then(
				function(response) {
					$scope.contacts = response.data._embedded.contacts;
				},
				function(errResponse) {
					console.error("Erro ao buscar contatos.");
				}
			)
			.finally(function(response) {
				$scope.loading = false;
			});

		};

		var getAllStates = function() {
			States.getAll()
			.then(
				function(response) {
					$scope.states = response.data._embedded.states;
				},
				function(errResponse) {
					console.error("Erro ao buscar estados.");
				}
			)
		};

		var getContact = function() {
			var id = $routeParams.id;
			if (id !== undefined) {
		  	Contacts.getById(id)
				.then(
					function(response) {
						$scope.contact = response.data;
					},
					function(errResponse) {
						console.error("Erro ao buscar contato.");
					}
				)
			}
		};

		$scope.save = function(contact) {
			console.info("Salvando contato...");
			var myContact = {
				id: null,
				name: contact.name,
				capital: contact.capital,
				state: contact.state._links.self.href
			};
			Contacts.save(myContact).then(
				function(response) {
					delete $scope.contact;
					console.info("Contato Salvo com Sucesso!");
					getAll();
					$location.path("/contacts");
				},
				function(response){
					console.error("Erro ao salvar Contato.");
				}
			);
		};

		$scope.update = function(contact) {
			var myContact = {
				id: contact.id,
				name: contact.name,
				capital: contact.capital,
				state: contact.state._links.self.href
			};
			Contacts.update(myContact).then(
				function(response) {
					delete $scope.contact;
					console.info("Contato Atualizado com Sucesso!");
					getAll();
					$location.path("/contacts");
				},
				function(response){
					console.error("Erro ao atualizar Contato.");
				}
			);
		};

		$scope.delete = function(id) {
			Contacts.deleteById(id).then(
				function(respose) {
					console.info("Contato removido com Sucesso!");
					getAll();
				},
				function(respose) {
					console.error("Erro ao remover Contato.");
				}
			);
		};

		(function init() {
			getAll();
			getContact();
			getAllStates();
		})();
	}
})();
