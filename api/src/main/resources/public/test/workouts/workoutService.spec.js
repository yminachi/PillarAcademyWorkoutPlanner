"use strict";

describe("workoutService", function () {
  var workoutService;

  beforeEach(module("app"));

  beforeEach(inject(function (_workoutService_) {
    workoutService = _workoutService_;
  }));

  describe('getWorkouts', function() {
  	it('should return empty array to start', function() {
  		expect(workoutService.getWorkouts().length).toBe(0);
  	});

  	it('should return all inserted workouts', function() {
  		workoutService.addWorkout({});
  		workoutService.addWorkout({});
  		workoutService.addWorkout({});

  		expect(workoutService.getWorkouts().length).toBe(3);
  	});
  });

  describe('getWorkoutById', function() {
  	it('should return the correct workout', function() {
  		workoutService.addWorkout({});

      console.log(workoutService.getWorkoutById(0));
  		expect(workoutService.getWorkoutById(0).id).toBe(0);
  	});
  });

  describe('deleteWorkout', function() {
    it("should delete the correct workout", function() {
      var workout = {name:"something"};
      workoutService.addWorkout(workout);
      expect(workoutService.getWorkoutById(0).name).toEqual(workout.name);
      workoutService.deleteWorkout(workout);

      expect(workoutService.getWorkoutById(0)).toBe(undefined);
    });
  });
});