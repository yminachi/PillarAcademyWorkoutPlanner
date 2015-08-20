(function () {

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['utils', '$timeout', '$http'];

    function HomeController(utils, $timeout, $http) {
        var vm = this;

        // Simulate 3 second loading time
        (function () {
            utils.showLoading();

            $timeout(function () {
                vm.pageTitle = "Home Page";

                utils.hideLoading();
            }, 200);

        })();
    }

})();