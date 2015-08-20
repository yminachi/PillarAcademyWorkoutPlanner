(function () {
    var moduleDependencies = ['ui.bootstrap', 'ui.router'];

    angular
        .module('app', moduleDependencies)
        .run(RunApp)

    RunApp.$inject = ['$state', '$rootScope', 'authenticationService'];

    function RunApp($state, $rootScope, authenticationService) {
		$rootScope.$on('$stateChangeStart', function(e, toState  , toParams
                                                   , fromState, fromParams) {
	        if(toState.name === "login") return;

	        if (!authenticationService.isLoggedIn()) {
	        	e.preventDefault();
	        	$state.go('login');
	        }
	    });
    };
})();