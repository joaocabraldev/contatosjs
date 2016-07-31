/* global angular */

/**
 * Diretivas gerais do sistema.
 */
(function() {

  'use strict';

  angular.module('contatosJS.directives', []);

  angular.module('contatosJS.directives')
  .directive('alerts', alertsDirective);

  /**
   * Diretivas de alerts.
   */
  function alertsDirective() {
    return {
      restrict: 'AE'
      , templateUrl: '../views/alertsDirective.html'
      , replace: true
      , link: function(scope, elem, attrs) {

        /**
         * Remove a mensagem por índice.
         * @param index Índice da mensagem.
         */
        scope.close = function(index) {
          scope.messages.splice(index, 1);
        }

      }
    };
  }

})();
