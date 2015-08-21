(function() {
	angular
		.module('app')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['authenticationService', 'utils'];

	function LoginController(authenticationService, utils) {
		var vm = this;

		vm.register = function(username) {
			clearError();
			authenticationService
				.register(username)
				.then(function(result) {
					if (result) {
						utils.goHome();
					} else {
						vm.errorMessage = "Registration Unsuccessful";
					}
				});
		}

		vm.login = function(username) {
			clearError();
			authenticationService
				.login(username)
				.then(function(success) {
					if (success) {
						utils.goHome();
					} else {
						vm.errorMessage = "Invalid username"
					}
				});
		}

		function clearError() {
			vm.errorMessage = undefined;
		}
	}
})();