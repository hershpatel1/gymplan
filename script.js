// This function will add a new workout to the list.
function addWorkout() {
  var workout = document.createElement("div");
  workout.className = "workout";

  // Get the workout title from the user.
  var workoutTitle = prompt("Enter the workout title:");

  // Create a new `<h4>` element for the workout title.
  var workoutTitleElement = document.createElement("h4");
  workoutTitleElement.textContent = workoutTitle;

  // Add the workout title element to the workout.
  workout.appendChild(workoutTitleElement);

  // Get the workout date from the user.
  var workoutDate = prompt("Enter the workout date:");

  // Create a new `<p>` element for the workout date.
  var workoutDateElement = document.createElement("p");
  workoutDateElement.textContent = workoutDate;

  // Add the workout date element to the workout.
  workout.appendChild(workoutDateElement);

  // Get the workout weight from the user.
  var workoutWeight = prompt("Enter the workout weight:");

  // Create a new `<p>` element for the workout weight.
  var workoutWeightElement = document.createElement("p");
  workoutWeightElement.textContent = workoutWeight;

  // Add the workout weight element to the workout.
  workout.appendChild(workoutWeightElement);

  // Get the workout sets from the user.
  var workoutSets = prompt("Enter the workout sets:");

  // Create a new `<p>` element for the workout sets.
  var workoutSetsElement = document.createElement("p");
  workoutSetsElement.textContent = workoutSets;

  // Add the workout sets element to the workout.
  workout.appendChild(workoutSetsElement);

  // Add the workout to the list of workouts.
  document.getElementById("workouts").appendChild(workout);
}
