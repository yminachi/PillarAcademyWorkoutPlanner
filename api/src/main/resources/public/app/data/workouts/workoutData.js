(function() {
	angular
		.module('app')
		.factory('workoutData', workoutData);

	function workoutData($timeout) {
		function getWorkouts() {
			return $timeout(function() {
				return "nothing";
			}, 5);
		}

		return {
			getWorkouts: getWorkouts
		};
	}
})();