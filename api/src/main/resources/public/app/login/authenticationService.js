(function() {
	angular
		.module('app')
		.factory('authenticationService', authenticationService);

	function authenticationService($http) {

		function register(username) {
			return $http
				.post('/register', {username: username})
				.then(function(result){
					if (result.status == 200) {
						return login(username);
					}
					return false;
				}, function() {
					return false;
				});
		}

		function login(username) {
			return $http
				.post('/login', {username: username})
				.then(function(result) {
					if (result.status === 200) {
						sessionStorage.setItem('username', username);
						return true;
					}
					return false;
				}, function() {
					return false;
				});
		}

		function isLoggedIn() {
			var username = sessionStorage.getItem('username');

			return username ? true : false;// ? true : false;
		}

		function logout() {
			sessionStorage.removeItem('username');
		}

		return {
			register: register,
			login: login,
			logout: logout,
			isLoggedIn: isLoggedIn
		};
	}
})();