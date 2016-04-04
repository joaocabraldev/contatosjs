/* globals angular */

(function() {
    angular
    .module("contatosJS")
    .controller("usersCtrl", usersCtrl);
    
    usersCtrl.$inject = ["$scope", "$location", "$routeParams", "Users"];
    function usersCtrl($scope, $location, $routeParams, Users) {
        
    }
})();