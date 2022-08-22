//Calculate Robot Position function
function onProcess() {
  //Declare variables for the game
  let x = 0;
  let y = 0;
  let inputValue = [];

  let right = false;
  let left = false;

  // Input for the game
  inputVal = document.getElementById("inputValue").value;

  // Count the number of times the user enters the correct value
  // var count_w = (inputVal.match(/w/g) || []).length;
  // var count_r = (inputVal.match(/r/g) || []).length;
  // var count_l = (inputVal.match(/l/g) || []).length;

  // Calculate the number of w, r, and l in the input value.
  for (let i = 0; i < inputVal.length; i++) {
    if (inputVal[i] == "w") {
      if (right == true) {
        x++;
      } else if (left == true) {
        x--;
      } else if (right == false && left == false) {
        y++;
      }
    } else if (inputVal[i] == "r") {
      right = !right;
    } else if (inputVal[i] == "l") {
      left = !left;
    }
  }
  // *Fix bug Turn right and left at the same times

  //Return Result
  document.getElementById("x-axis").innerHTML = x;
  document.getElementById("y-axis").innerHTML = y;
}

//Check Enter Key Press and call onProcess function
let inputVal = document.getElementById("inputValue");
inputVal.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("onProcess").click();
  }
});
