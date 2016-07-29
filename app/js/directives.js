/* global angular */

(function() {
  
  'use strict';
  
  angular.module('contatosJS.directives', []);
  
  angular.module('contatosJS.directives')
  .directive('alerts', alertsDirective);
  
  function alertsDirective() {
    return {
      restrict: 'AE'
      , templateUrl: '../views/alertsDirective.html'
      , replace: true
      , controller: 'navCtrl'
    };
  }
  
})();