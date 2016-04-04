/* globals angular */

(function() {
	angular
	.module("contatosJS")
	.factory("States", states);
	
	states.$inject = ["$http", "config"];
	function states($http, config){
		var service = {};
		service.getAll = getAll;
		service.getById = getById;
		service.save = save;
		service.update = update;
		service.deleteById = deleteById;
		return service;
		
		function getAll() {
			return $http.get(config.baseUrl + "/states");
		}
		
		function getById(id) {
			return $http.get(config.baseUrl + "/states/" + id);
		}
		
		function save(state) {
			return $http.post(config.baseUrl + "/states", state);
		}
		
		function update(state) {
			return $http.post(config.baseUrl + "/states", state);
		}
		
		function deleteById(id) {
			return $http.delete(config.baseUrl + "/states/" + id);
		}
	}
})();