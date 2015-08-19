(function () {
    var moduleDependencies = ['ui.bootstrap', 'ui.router'];

    angular
        .module('app', moduleDependencies)
        .run(RunApp)

    RunApp.$inject = ['$state'];

    function RunApp($state) {};
})();