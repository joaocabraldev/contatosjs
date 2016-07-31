/*globals angular */

(function() {
	angular
	.module("contatosJS.login")
	.controller("LoginCtrl", loginCtrl);

	loginCtrl.$inject = ["$scope", "$rootScope", "$location", "LoginService"];
    function loginCtrl($scope, $rootScope, $location, LoginService, Messages) {
        $scope.login = function() {
            LoginService.login($scope.username, $scope.password, function(response) {
                if (response.success) {
                    LoginService.setCredentials(response.user.login
                    	, response.user.password, response.user.name);
										$location.path("/");
                } else {
                	$scope.messages.push({"type": "alert-danger", "text": response.message})
                  console.error(response.message);
                }
            });
        };

        $scope.logout = function() {
          LoginService.clearCredentials();
          $location.path("/login");
					$scope.messages = [];
        };

        function init() {
            LoginService.clearCredentials();
        }

        init();
    }

})();
