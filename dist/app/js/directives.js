/* global angular */

'use strict';

angular.module('contatosJS.directives', ['contatosJS.services']);

angular.module('contatosJS.directives').
  directive('appVersion', ['version', function(version) {
    
    return function(scope, elm, attrs) {
      elm.text(version);
    };
    
}]);
