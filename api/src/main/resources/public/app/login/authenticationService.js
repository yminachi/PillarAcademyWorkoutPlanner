(function() {
	angular
		.module('app')
		.factory('authenticationService', authenticationService);

	function authenticationService($http) {

		function register(username) {
			return $http.post('/register', username);
		}

		function login(username) {
			return $http.post('/login', {username: username}).then(function(result) {
				if (result.status === 200) 
					localStorage.setItem('username', username);

				return true;
			}, function() {
				return false;
			});
		}

		function isLoggedIn() {
			var username = localStorage.getItem('username');

			return username ? true : false;// ? true : false;
		}

		function logout() {
			localStorage.removeItem('username');
		}

		return {
			register: register,
			login: login,
			logout: logout,
			isLoggedIn: isLoggedIn
		};
	}
})();