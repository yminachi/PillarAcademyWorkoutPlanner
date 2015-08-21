(function () {

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['workoutService'];

    function HomeController(workoutService) {
        var vm = this;

        (function() {
        	vm.workouts = workoutService.getWorkouts();
            clearErrors();
        })();

        vm.addWorkout = function(workout) {
            clearErrors();
            if (!workout || !workout.name || !workout.distance || !workout.time) {
                vm.errors.push("All fields are required.");
                return;
            }

        	workoutService.addWorkout(workout);
            vm.newWorkout = {};
        	vm.workouts = workoutService.getWorkouts();
        }

        vm.deleteWorkout = function(workout) {
            workoutService.deleteWorkout(workout);
            vm.workouts = workoutService.getWorkouts();
        }
        
        function clearErrors() {
            vm.errors = [];
        };
    }

})();