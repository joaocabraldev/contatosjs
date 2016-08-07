/* globals angular */

(function() {
	angular
	.module("contatosJS.contacts")
	.factory("Contacts", contactsService);

	contactsService.$inject = ["$http", "config"];
	function contactsService($http, config){
		var service = {};
		service.getAll = getAll;
		service.getById = getById;
		service.save = save;
		service.update = update;
		service.deleteById = deleteById;
		return service;

		function getAll() {
			return $http.get(config.baseUrl + "/contacts");
		}

		function getById(id) {
			return $http.get(config.baseUrl + "/contacts/" + id + "?projection=fullContact");
		}

		function save(contact) {
			return $http.post(config.baseUrl + "/contacts", contact);
		}

		function update(contact) {
			return $http.post(config.baseUrl + "/contacts", contact);
		}

		function deleteById(id) {
			return $http.delete(config.baseUrl + "/contacts/" + id);
		}

	}
})();
