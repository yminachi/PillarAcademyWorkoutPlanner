(function () {

    var appInfo = {
        applicationName: 'Barebones Angular SPA',
        companyName: 'Tom Charles'
    };

    angular
        .module('app')
        .constant('appInfo', appInfo);

})();