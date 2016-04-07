/* globals angular */

(function() {
    angular.module("contatosJS")
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