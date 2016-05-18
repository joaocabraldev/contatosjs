/* globals angular */

(function() {
	angular
	.module("contatosJS.users")
	.factory("Users", users);
	
	users.$inject = ["$http", "config"];
	function users($http, config){
		var service = {};
		service.getAll = getAll;
		service.getById = getById;
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
		
		function save(user) {
			return $http.post(config.baseUrl + "/users", user);
		}
		
		function update(user) {
			return $http.post(config.baseUrl + "/users", user);
		}
		
		function deleteById(id) {
			return $http.delete(config.baseUrl + "/users/" + id);
		}
	}
})();