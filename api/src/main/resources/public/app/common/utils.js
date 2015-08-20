(function () {

    angular
        .module('app')
        .factory('utils', utils);

    utils.$inject = ['$rootScope', '$state'];

    function utils($rootScope, $state) {
        $rootScope.loadingCount = 0;

        var showLoading = function () {
            $rootScope.loadingCount++;
        };

        var hideLoading = function () {
            if ($rootScope.loadingCount > 0) {
                $rootScope.loadingCount--;
            }
        };

        var goHome = function() {
            $state.go('/');
        }

        return {
            showLoading: showLoading,
            hideLoading: hideLoading,
            goHome: goHome
        };
    }

})();