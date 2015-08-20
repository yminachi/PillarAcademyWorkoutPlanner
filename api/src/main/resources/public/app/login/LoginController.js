(function() {
	angular
		.module('app')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['authenticationService'];

	function LoginController(authenticationService) {
		var vm = this;

		vm.register = function(username) {
			authenticationService
				.register(username)
				.then(function(result) {
					if (result) 
						utils.goHome();
				});
		}
		vm.register = authenticationService.register;
		vm.login = authenticationService.login;
	}
})();