/* globals angular */

(function() {
	angular
	.module("contatosJS.cities")
	.factory("Cities", citiesService);
	
	citiesService.$inject = ["$http", "config"];
	function citiesService($http, config){
		var service = {};
		service.getAll = getAll;
		service.getById = getById;
		service.save = save;
		service.update = update;
		service.deleteById = deleteById;
		return service;
		
		function getAll() {
			return $http.get(config.baseUrl + "/cities");
		}
		
		function getById(id) {
			return $http.get(config.baseUrl + "/cities/" + id);
		}
		
		function save(state) {
			return $http.post(config.baseUrl + "/cities", state);
		}
		
		function update(state) {
			return $http.post(config.baseUrl + "/cities", state);
		}
		
		function deleteById(id) {
			return $http.delete(config.baseUrl + "/cities/" + id);
		}
	}
})();