function onProcess() {
  //Declare variables for the game
  let x = 0;
  let y = 0;
  let inputValue = [];
  // Input for the game
  inputVal = document.getElementById("inputValue").value;

  // Count the number of times the user enters the correct value
  var count_w = (inputVal.match(/w/g) || []).length;
  var count_r = (inputVal.match(/r/g) || []).length;
  var count_l = (inputVal.match(/l/g) || []).length;

  // Calculate the number of w, r, and l in the input value.
  for (let i = 0; i < inputVal.length; i++) {
    if (inputVal[i] == "w") {
      y++;
    } else if (inputVal[i] == "r") {
      x = x;
    }
  }

  //Return Result
  document.getElementById("x-axis").innerHTML = x;
  document.getElementById("y-axis").innerHTML = y;
}
