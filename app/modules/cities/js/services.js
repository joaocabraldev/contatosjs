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
			return $http.get(config.baseUrl + "/cities/" + id + "?projection=fullCity");
		}

		function save(city) {
			return $http.post(config.baseUrl + "/cities", city);
		}

		function update(city) {
			return $http.post(config.baseUrl + "/cities", city);
		}

		function deleteById(id) {
			return $http.delete(config.baseUrl + "/cities/" + id);
		}
	}
})();
