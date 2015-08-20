(function() {

    angular
      .module('app')
      .config(stateConfigurator);

    stateConfigurator.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfigurator($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'about/about.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'login/login.html'
        });
    }

})();