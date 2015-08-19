(function () {

    angular
        .module('app')
        .constant('config', config);

    var config = {
        connectionString: 'http://localhost'
    };

})();