"use strict";

describe("workoutData service", function () {
  var workoutData;

  beforeEach(module("app"));

  beforeEach(inject(function (_workoutData_, $httpBackend) {
    workoutData = _workoutData_;
  }));

  it("should do something", function () {
  	expect(1).toBe(1);
  });

});