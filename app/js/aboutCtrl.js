/*globals angular */

angular.module("contatosJS")

.controller("AboutCtrl", function($scope) {
	$scope.title = "Contatos Web";
	$scope.description = "Sistema de Contatos web usando AngularJS consumindo uma API RESTFull Spring Boot.";
	$scope.author = "João Antônio Cabral";
});