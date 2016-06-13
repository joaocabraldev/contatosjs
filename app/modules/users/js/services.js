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
			return $http.get(config.baseUrl + "/systemUsers");
		}
		
		function getById(id) {
			return $http.get(config.baseUrl + "/systemUsers/" + id);
		}
		
		function save(user) {
			return $http.post(config.baseUrl + "/systemUsers", user);
		}
		
		function update(user) {
			return $http.post(config.baseUrl + "/systemUsers", user);
		}
		
		function deleteById(id) {
			return $http.delete(config.baseUrl + "/systemUsers/" + id);
		}
	}
})();
