/* global angular */

/**
 * Serviços gerais da aplicação.
 */
(function() {
	"use strict";

	angular
	.module("contatosJS.services", []);

	angular
	.module("contatosJS.services")
	.value("config", {

		/**
		 * URL Base da aplicação real.
		 * Local: baseUrl: "http://localhost:8080/rest"
		 */
		baseUrl: "https://contatosweb.herokuapp.com/rest"

	});

})();
