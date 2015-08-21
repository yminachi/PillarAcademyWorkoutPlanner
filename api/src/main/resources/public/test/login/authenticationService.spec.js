"use strict";

describe("authenticationService", function () {
  var authenticationService;

  beforeEach(module("app"));

  beforeEach(inject(function (_authenticationService_) {
  	sessionStorage.clear();
    authenticationService = _authenticationService_;
  }));

  describe('isLoggedIn', function() {
  	it('should return false when not logged in', function() {
  		expect(authenticationService.isLoggedIn()).toBe(false);
  	});

    it('should return false after logout', function() {
      sessionStorage.setItem('username', 'tom');

      expect(authenticationService.isLoggedIn()).toBe(true);

      authenticationService.logout();

      expect(authenticationService.isLoggedIn()).toBe(false);
    });
  });
});