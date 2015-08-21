describe('LoginController', function() {
  var controller, workoutService, scope;
  
  beforeEach(function() {
    var mockWorkoutService = {
      workouts: [{id:1, name: "Something", time: 5, distance: 5}, {id:2, name: "Something Else", time: 10, distance: 10}],
      getWorkouts: function() {
        return this.workouts;
      },
      getWorkoutById: function(id) {
        return workouts[0]
      },
      addWorkout: function(workout) {
        this.workouts.push(workout);
      },
      deleteWorkout: function(workout) {
        var index = this.workouts.indexOf(workout);
        this.workouts.splice(index, 1);
      }
    }

    module('app', function($provide) {
      $provide.value('workoutService', mockWorkoutService);
    });
  });

  beforeEach(inject(function($controller, $rootScope, _workoutService_) {
  	scope = $rootScope.$new();
  	controller = $controller;
    workoutService = _workoutService_;
  }));

  it('should be initialized with the workouts from the workoutService', function() {
    var vm = controller('HomeController', { workoutService: workoutService });

    scope.$digest();

    expect(vm.workouts).toEqual([{id:1, name: "Something", time: 5, distance: 5}, {id:2, name: "Something Else", time: 10, distance: 10}]);
  });

  it('should update the workouts when adding a new workout', function() {
    var vm = controller('HomeController', { workoutService: workoutService });

    scope.$digest();

    vm.addWorkout({id:10, name:"new workout", time: 15, distance: 15})

    expect(vm.workouts).toEqual([{id:1, name: "Something", time: 5, distance: 5}, {id:2, name: "Something Else", time: 10, distance: 10}, {id:10, name:"new workout", time: 15, distance: 15} ]);
  });

  it('should update the workouts when deleting a workout', function() {
    var vm = controller('HomeController', { workoutService: workoutService});
    var workout = {id:10, name:"new workout", time: 5, distance: 10};

    scope.$digest();

    vm.addWorkout(workout);
    
    vm.deleteWorkout(workout);

    expect(vm.workouts).toEqual([{id:1, name: "Something", time: 5, distance: 5}, {id:2, name: "Something Else", time: 10, distance: 10}]);
  });
});