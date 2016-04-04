/* globals angular */

(function() {
    "use strict";
    
    angular
    .module("contatosJS")
    .controller("LoginCtrl", loginCtrl);
    
    loginCtrl.$inject = ["$scope", "$rootScope", "$location", "LoginService"];
    function loginCtrl($scope, $rootScope, $location, LoginService) {
        $scope.login = function() {
            LoginService.login($scope.username, $scope.password, function(response) {
                if (response.success) {
                    LoginService.setCredentials($scope.username, $scope.password);
                    $location.path("/");
                } else {
                    console.error(response.message);
                }
            });
        };
        
        $scope.logout = function() {
          LoginService.clearCredentials();
          $location.path("/login");
        };
        
        function init() {
            LoginService.clearCredentials();
        }
        
        init();
    }
})();