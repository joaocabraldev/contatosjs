/*globals angular */

/*eslint-env browser */

angular.module("statesModule")

.factory("States", ["$http", "config", function($http, config) {
	
	return {
		"getAll": function() {
			return $http.get(config.baseUrl + "/states");
		},
		"getById": function(id) {
			return $http.get(config.baseUrl + "/states/" + id);
		},
		"save": function(state) {
			return $http.post(config.baseUrl + "/states/new", state);
		},
		"deleteById": function(id){
			return $http.delete(config.baseUrl + "/states/delete/" + id);
		}
	};
	
}]);