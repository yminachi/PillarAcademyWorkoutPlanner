(function() {

	angular
		.module('app')
		.factory('workoutService', workoutService);

	function workoutService() {
		var workouts = [];
		var nextId = 0;

		function getWorkouts() {
			return workouts;
		}

		function getWorkoutById(id) {
			for (var i = 0; i < workouts.length; i++) {
				if (workouts[i].id === id) 
					return workouts[i];
			}
		}

		function addWorkout(workout) {
			workouts.push({id: nextId++, name: workout.name, time: workout.time, distance: workout.distance});
		}

		function deleteWorkout(workout) {
			var index = workouts.indexOf(workout);
			workouts.splice(index, 1);
		};

		return {
			getWorkouts: getWorkouts,
			getWorkoutById: getWorkoutById,
			addWorkout: addWorkout,
			deleteWorkout: deleteWorkout
		};
	}

})();