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
		 * URL Base da aplicação de api.
		 * Local: baseUrl: "http://localhost:8080/rest"
		 * Online: baseUrl: "https://contatosweb.herokuapp.com/rest"
		 */
		baseUrl: "http://localhost:8080/rest"

	});

})();
