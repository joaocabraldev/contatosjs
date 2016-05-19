/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS", [
		"ngRoute"
		, "ngCookies"
		, "contatosJS.controllers"
		, "contatosJS.services"
		, "contatosJS.login"
		, "contatosJS.users"
		, "contatosJS.states"
		, "contatosJS.cities"
	]);
	
	angular
	.module("contatosJS")
	.config(config);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
		$routeProvider
	
		.when("/", {
			templateUrl: "views/home.html",
			controller: "HomeCtrl"
		})
		
		.when("/about", {
			templateUrl: "views/about.html",
			controller: "AboutCtrl"
		});
		
	}

})();

/* globals angular */

(function() {
	"use strict";
	
	angular
	.module("contatosJS.controllers", []);
	
	angular
	.module("contatosJS.controllers")
	.controller("AboutCtrl", aboutCtrl)
	.controller("HomeCtrl", homeCtrl)
	.controller("NavCtrl", navCtrl);
	
	aboutCtrl.$inject = ["$scope"];
	function aboutCtrl($scope) {
		$scope.title = "Contatos Web";
		$scope.description = "Sistema de Contatos web usando AngularJS consumindo uma API RESTFull Spring Boot.";
		$scope.author = "João Antônio Cabral";
	}
	
	homeCtrl.$inject = ["$scope"];
	function homeCtrl($scope) {
		$scope.title = "Contatos Web";
		$scope.description = "Sistema de Contatos Web usando AngularJS.";
	}
	
	navCtrl.$inject = ["$scope", "$location"];
	function navCtrl($scope, $location) {
		$scope.isActive = function(destination) {
			return destination === $location.path();
		};
	}
	
})();

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

/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS.login", []);
	
	angular
	.module("contatosJS.login")
	.config(config)
	.run(run);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
		$routeProvider
		
		.when("/login", {
			templateUrl: "modules/login/views/login.html",
			controller: "LoginCtrl"
		})
		
		.when("/logout", {
			templateUrl: "modules/login/views/login.html",
			controller: "LoginCtrl"
		});
		
	}
	
	run.$inject = ["$rootScope", "$location", "$cookieStore", "$http"];
	function run($rootScope, $location, $cookieStore, $http) {
		$rootScope.globals = $cookieStore.get("globals") || {};
		
		if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common["Authorization"] = "Basic " + $rootScope.globals.currentUser.authdata;
        }
        
        $rootScope.$on("$locationChangeStart", function (event, next, current) {
            if ($location.path() !== "/login" && !$rootScope.globals.currentUser) {
                $location.path("/login");
            }
        });
	}

})();

/*globals angular */

(function() {
	angular
	.module("contatosJS.login")
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

/* globals angular */

(function() {
	angular
	.module("contatosJS.login")
	.factory("LoginService", loginService);
	
	loginService.$inject = ["$http", "$cookieStore", "$rootScope", "Users"];
    function loginService($http, $cookieStore, $rootScope, Users) {
        var base64 = {};
        base64.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        base64.encode = encode;
        base64.decode = decode;
        
        function encode(input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
 
            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
 
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
 
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
 
                output = output +
                    this.keyStr.charAt(enc1) +
                    this.keyStr.charAt(enc2) +
                    this.keyStr.charAt(enc3) +
                    this.keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);
 
            return output;
        }
        
        function decode(input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
 
            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
            do {
                enc1 = this.keyStr.indexOf(input.charAt(i++));
                enc2 = this.keyStr.indexOf(input.charAt(i++));
                enc3 = this.keyStr.indexOf(input.charAt(i++));
                enc4 = this.keyStr.indexOf(input.charAt(i++));
 
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
 
                output = output + String.fromCharCode(chr1);
 
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
 
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
 
            } while (i < input.length);
 
            return output;
        }
        
        var service = {};
        service.login = login;
        service.setCredentials = setCredentials;
        service.clearCredentials = clearCredentials;
        return service;
        
        function login(username, password, callback) {
            var response;
            
            if (username === "admin" && password === "1234") {
                response = { success: true };
            } else {
                response = { success: false, message: "Usuário ou senha incorretos!" };
            }
            
            callback(response);
        }
        
        function setCredentials(username, password) {
            var authdata = base64.encode(username + ":" + password);
     
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                },
                loggedIn: true
            };
 
            $http.defaults.headers.common["Authorization"] = "Basic " + authdata;
            $cookieStore.put("globals", $rootScope.globals);
        }
        
        function clearCredentials() {
        	$rootScope.globals = {};
            $cookieStore.remove("globals");
            $http.defaults.headers.common.Authorization = "Basic";
        }

    }
	
})();

/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS.users", []);
	
	angular
	.module("contatosJS.users")
	.config(config);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
		$routeProvider
		
		.when("/users", {
			templateUrl: "modules/users/views/list.html",
			controller: "UsersCtrl"
		})
		
		.when("/users/new", {
			templateUrl: "modules/users/views/new.html",
			controller: "UsersCtrl"
		})
		
		.when("/users/:id", {
			templateUrl: "modules/users/views/details.html",
			controller: "UsersCtrl"
		})
		
		.when("/users/edit/:id", {
			templateUrl: "modules/users/views/edit.html",
			controller: "UsersCtrl"
		});
		
	}

})();

/*globals angular */

(function() {
	angular
	.module("contatosJS.users")
	.controller("UsersCtrl", usersCtrl);
	
	usersCtrl.$inject = ["$scope", "$location", "$routeParams", "Users"];
	function usersCtrl($scope, $location, $routeParams, Users) {
		$scope.user = [];
		$scope.users = [];
		$scope.loading = true;
		
		var getAll = function() {
			Users.getAll()
			.then(
				function(response) {
					$scope.users = response.data._embedded.users;
				},
				function(errResponse) {
					console.error("Erro ao buscar usuários.");
				}
			)
			.finally(function(response) {
				$scope.loading = false;
			});
		};
		
		var getUser = function() {
			var id = $routeParams.id;
			if (id !== undefined) {
				Users.getById(id)
				.then(
					function(response) {
						$scope.user = response.data;
					},
					function(errResponse) {
						console.error("Erro ao buscar usuário.");
					}
				);
			}
		};
		
		$scope.save = function(user) {
			var myUser = {
				id: null,
				name: user.name,
				initials: user.initials
			};
			Users.save(myUser).then(
				function(response) {
					delete $scope.user;
					console.info("Usuário Salvo com Sucesso!");
					getAll();
					$location.path("/users");
				},
				function(response){
					console.error("Erro ao salvar Usuário.");
				}
			);
		};
		
		$scope.update = function(user) {
			var myUser = {
				id: user.id,
				name: user.name,
				initials: user.initials
			};
			Users.update(myUser).then(
				function(response) {
					delete $scope.user;
					console.info("Usuário atualizado com Sucesso!");
					getAll();
					$location.path("/users");
				},
				function(response){
					console.error("Erro ao atualizar Usuário.");
				}
			);
		};
		
		$scope.delete = function(id) {
			Users.deleteById(id).then(
				function(respose) {
					console.info("Usuário removido com Sucesso!");
					getAll();
				},
				function(respose) {
					console.error("Erro ao remover Usuário.");
				}
			);
		};
		
		(function init() {
			getAll();
			getUser();
		})();
	}
})();

/* globals angular */

(function() {
	angular
	.module("contatosJS.users")
	.factory("Users", users);
	
	users.$inject = ["$http", "config"];
	function users($http, config){
		var service = {};
		service.getAll = getAll;
		service.getById = getById;
		service.save = save;
		service.update = update;
		service.deleteById = deleteById;
		return service;
		
		function getAll() {
			return $http.get(config.baseUrl + "/users");
		}
		
		function getById(id) {
			return $http.get(config.baseUrl + "/users/" + id);
		}
		
		function save(user) {
			return $http.post(config.baseUrl + "/users", user);
		}
		
		function update(user) {
			return $http.post(config.baseUrl + "/users", user);
		}
		
		function deleteById(id) {
			return $http.delete(config.baseUrl + "/users/" + id);
		}
	}
})();

/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS.states", []);
	
	angular
	.module("contatosJS.states")
	.config(config);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
		$routeProvider
		
		.when("/states", {
			templateUrl: "modules/states/views/list.html",
			controller: "StatesCtrl"
		})
		
		.when("/states/new", {
			templateUrl: "modules/states/views/new.html",
			controller: "StatesCtrl"
		})
		
		.when("/states/:id", {
			templateUrl: "modules/states/views/details.html",
			controller: "StatesCtrl"
		})
		
		.when("/states/edit/:id", {
			templateUrl: "modules/states/views/edit.html",
			controller: "StatesCtrl"
		});
		
	}

})();

/*globals angular */

(function() {
	angular
	.module("contatosJS.states")
	.controller("StatesCtrl", statesCtrl);
	
	statesCtrl.$inject = ["$scope", "$location", "$routeParams", "States"];
	function statesCtrl($scope, $location, $routeParams, States) {
		$scope.state = [];
		$scope.states = [];
		$scope.loading = true;
		
		var getAll = function() {
			States.getAll()
			.then(
				function(response) {
					$scope.states = response.data._embedded.states;
				},
				function(errResponse) {
					console.error("Erro ao buscar estados.");
				}
			)
			.finally(function(response) {
				$scope.loading = false;
			});
		};
		
		var getState = function() {
			var id = $routeParams.id;
			if (id !== undefined) {
				States.getById(id)
				.then(
					function(response) {
						$scope.state = response.data;
					},
					function(errResponse) {
						console.error("Erro ao buscar estado.");
					}
				);
			}
		};
		
		$scope.save = function(state) {
			var myState = {
				id: null,
				name: state.name,
				initials: state.initials
			};
			States.save(myState).then(
				function(response) {
					delete $scope.state;
					console.info("Estado Salvo com Sucesso!");
					getAll();
					$location.path("/states");
				},
				function(response){
					console.error("Erro ao salvar Estado.");
				}
			);
		};
		
		$scope.update = function(state) {
			var myState = {
				id: state.id,
				name: state.name,
				initials: state.initials
			};
			States.update(myState).then(
				function(response) {
					delete $scope.state;
					console.info("Estado atualizado com Sucesso!");
					getAll();
					$location.path("/states");
				},
				function(response){
					console.error("Erro ao atualizar Estado.");
				}
			);
		};
		
		$scope.delete = function(id) {
			States.deleteById(id).then(
				function(respose) {
					console.info("Estado removido com Sucesso!");
					getAll();
				},
				function(respose) {
					console.error("Erro ao remover Estado.");
				}
			);
		};
		
		(function init() {
			getAll();
			getState();
		})();
	}
})();

/* globals angular */

(function() {
	angular
	.module("contatosJS.states")
	.factory("States", states);
	
	states.$inject = ["$http", "config"];
	function states($http, config){
		var service = {};
		service.getAll = getAll;
		service.getById = getById;
		service.save = save;
		service.update = update;
		service.deleteById = deleteById;
		return service;
		
		function getAll() {
			return $http.get(config.baseUrl + "/states");
		}
		
		function getById(id) {
			return $http.get(config.baseUrl + "/states/" + id);
		}
		
		function save(state) {
			return $http.post(config.baseUrl + "/states", state);
		}
		
		function update(state) {
			return $http.post(config.baseUrl + "/states", state);
		}
		
		function deleteById(id) {
			return $http.delete(config.baseUrl + "/states/" + id);
		}
	}
	
})();

/* global angular, $  */

(function() {
	"use strict";
	
	angular
	.module("contatosJS.cities", []);
	
	angular
	.module("contatosJS.cities")
	.config(config);
	
	config.$inject = ["$routeProvider"];
	function config($routeProvider) {
		$routeProvider
		
		.when("/cities", {
			templateUrl: "modules/cities/views/list.html",
			controller: "CitiesCtrl"
		})
		
	}

})();

/*globals angular */

(function() {
	angular
	.module("contatosJS.cities")
	.controller("CitiesCtrl", citiesCtrl);
	
	citiesCtrl.$inject = ["$scope", "$location", "$routeParams", "Cities"];
	function citiesCtrl($scope, $location, $routeParams, Cities) {
		$scope.city = [];
		$scope.cities = [];
		$scope.loading = true;
		
		var getAll = function() {
			Cities.getAll()
			.then(
				function(response) {
					$scope.cities = response.data._embedded.cities;
				},
				function(errResponse) {
					console.error("Erro ao buscar cidades.");
				}
			)
			.finally(function(response) {
				$scope.loading = false;
			});
			
		};
		
		var getCity = function() {
			var id = $routeParams.id;
			if (id !== undefined) {
			    $scope.city = $scope.cities[id];
			    
			    /*
				Cities.getById(id)
				.then(
					function(response) {
						$scope.cities = response.data;
					},
					function(errResponse) {
						console.error("Erro ao buscar cidade.");
					}
				);
				*/
			}
		};
		
		$scope.save = function(city) {
			var myCity = {
				id: null,
				name: city.name,
				capital: city.capital,
				state: city.state
			};
			Cities.save(myCity).then(
				function(response) {
					delete $scope.city;
					console.info("Cidade Salva com Sucesso!");
					getAll();
					$location.path("/cities");
				},
				function(response){
					console.error("Erro ao salvar Cidade.");
				}
			);
		};
		
		$scope.update = function(city) {
			var myCity = {
				id: city.id,
				name: city.name,
				capital: city.capital,
				state: city.state
			};
			Cities.update(myCity).then(
				function(response) {
					delete $scope.city;
					console.info("Cidade Atualizada com Sucesso!");
					getAll();
					$location.path("/cities");
				},
				function(response){
					console.error("Erro ao atualizar Cidade.");
				}
			);
		};
		
		$scope.delete = function(id) {
			Cities.deleteById(id).then(
				function(respose) {
					console.info("Cidade removida com Sucesso!");
					getAll();
				},
				function(respose) {
					console.error("Erro ao remover Cidade.");
				}
			);
		};
		
		(function init() {
			getAll();
			getCity();
		})();
	}
})();

/* globals angular */

(function() {
	angular
	.module("contatosJS.cities")
	.factory("Cities", citiesService);
	
	citiesService.$inject = ["$http", "config"];
	function citiesService($http, config){
		var service = {};
		service.getAll = getAll;
		service.getById = getById;
		service.save = save;
		service.update = update;
		service.deleteById = deleteById;
		return service;
		
		function getAll() {
			return $http.get(config.baseUrl + "/cities");
		}
		
		function getById(id) {
			return $http.get(config.baseUrl + "/cities/" + id);
		}
		
		function save(state) {
			return $http.post(config.baseUrl + "/cities", state);
		}
		
		function update(state) {
			return $http.post(config.baseUrl + "/cities", state);
		}
		
		function deleteById(id) {
			return $http.delete(config.baseUrl + "/cities/" + id);
		}
	}
})();