/* global angular */

(function() {
	"use strict";
	
	angular
	.module("contatosJS.services", []);
		
	angular
	.module("contatosJS.services")
	.value("config", {
		baseUrl: "https://contatosweb.herokuapp.com/rest"
	});

})();