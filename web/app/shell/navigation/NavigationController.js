(function () {

    angular
        .module('app')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$location', 'appInfo'];

    function NavigationController($location, appInfo) {
        var vm = this;

        vm.isCollapsed = true;
        vm.isActive = isActive;
        vm.applicationName = appInfo.applicationName;
        
        var isActive =  function (viewLocation) {
            return viewLocation === $location.path();
        };
    }

})();