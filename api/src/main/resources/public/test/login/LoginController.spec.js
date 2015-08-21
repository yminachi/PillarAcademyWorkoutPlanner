describe('LoginController', function() {
  var controller, authenticationService, utils, scope;

  var goHomeCalled;
  
  beforeEach(function() {
  	goHomeCalled = false;

    var mockAuthenticationService = {};
    var mockUtilsService = {
    	goHome: function() {
    		goHomeCalled = true;
    	}
    };

    module('app', function($provide) {
      $provide.value('authenticationService', mockAuthenticationService);
      $provide.value('utils', mockUtilsService);
    });
    
    inject(function($q) {
    	mockAuthenticationService.login = function (username) {
    		var deferred = $q.defer();

    		if (username === "Dicko") {
    			deferred.resolve(true);
    		} else {
    			deferred.resolve(false)
    		}

    		return deferred.promise;
    	}

    	mockAuthenticationService.register = function (username) {
    		var deferred = $q.defer();

    		if (username === "Dicko") {
    			deferred.resolve(true);
    		} else {
    			deferred.resolve(false)
    		}

    		return deferred.promise;
    	}
    });
  });


  beforeEach(inject(function($controller, $rootScope, _authenticationService_, _utils_) {
  	scope = $rootScope.$new();
  	controller = $controller;
    authenticationService = _authenticationService_;
    utilsService = _utils_;
  }));


  describe('login', function() {
    it('should go home when username is valid', function() {
      var vm = controller('LoginController', { authenticationService: authenticationService, utils: utilsService});

      vm.login('Dicko');
      scope.$digest();
      expect(goHomeCalled).toBe(true);
    });

    it('should not go home when username is invalid', function() {
      var vm = controller('LoginController', { authenticationService: authenticationService, utils: utilsService});

      vm.login('Tom');
      scope.$digest();
      expect(goHomeCalled).toBe(false);
    });
  });

  describe('register', function() {
    it('should go home when registering unused username', function() {
      var vm = controller('LoginController', { authenticationService: authenticationService, utils: utilsService});

      vm.register('Dicko');
      scope.$digest();
      expect(goHomeCalled).toBe(true);
    });

    it('should not go home when username is taken', function() {
      var vm = controller('LoginController', { authenticationService: authenticationService, utils: utilsService});

      vm.register('Tom');
      scope.$digest();
      expect(goHomeCalled).toBe(false);
    });
  });
});