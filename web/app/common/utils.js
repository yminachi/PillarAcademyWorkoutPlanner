(function () {

    angular
        .module('app')
        .factory('utils', utils);

    utils.$inject = ['$rootScope'];

    function utils($rootScope) {
        $rootScope.loadingCount = 0;

        var showLoading = function () {
            $rootScope.loadingCount++;
        };

        var hideLoading = function () {
            if ($rootScope.loadingCount > 0) {
                $rootScope.loadingCount--;
            }
        };

        return {
            showLoading: showLoading,
            hideLoading: hideLoading
        };
    }

})();