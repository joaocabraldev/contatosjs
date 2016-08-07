/* global angular, $  */

(function() {

  "use strict";

  angular
  .module("contatosJS.contacts", []);

  angular
  .module("contatosJS.contacts")
  .config(config);

  config.$inject = ["$routeProvider"];

  /**
	 * Configuração de rotas do múdulo de Contatos.
	 * @param $routeProvider Provedor de rotas.
	 */
  function config($routeProvider) {
    $routeProvider

    .when("/contacts", {
			templateUrl: "modules/contacts/views/list.html",
			controller: "ContactsCtrl"
		})

    .when("/contacts/new", {
			templateUrl: "modules/contacts/views/new.html",
			controller: "ContactsCtrl"
		})

		.when("/contacts/:id", {
			templateUrl: "modules/contacts/views/details.html",
			controller: "ContactsCtrl"
		})

		.when("/contacts/edit/:id", {
			templateUrl: "modules/contacts/views/edit.html",
			controller: "ContactsCtrl"
		});
  }

})();
