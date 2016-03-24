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
		}
	};
	
}]);