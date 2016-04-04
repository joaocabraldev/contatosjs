/* globals angular */

(function() {
	angular
	.module("contatosJS")
	.factory("Users", usersService);
	
	usersService.$inject = ["$http", "config"];
	function usersService($http, config) {
		var service = {};
		service.getAll = getAll;
		service.getById = getById;
		service.getByUsername = getByUsername;
		service.save = save;
		service.update = update;
		service.deleteById = deleteById;
		return service;
		
		function getAll() {
			return $http.get(config.baseUrl + "/users");
		}
		
		function getById(id) {
			return $http.get(config.baseUrl + "/users/" + id);
		}
		
		function getByUsername(username) {
			return $http.get(config.baseUrl + "/users/searchByUsername" + username);
		}
		
		function save(state) {
			return $http.post(config.baseUrl + "/users", state);
		}
		
		function update(state) {
			return $http.post(config.baseUrl + "/users", state);
		}
		
		function deleteById(id) {
			return $http.delete(config.baseUrl + "/users/" + id);
		}
	}
})();