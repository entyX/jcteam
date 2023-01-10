
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 496037657 || x > 496037657) {
    text = "Password is incorrect.";
  } else {
    text = "Password is correct!";
    location.replace("https://entyx.github.io/jcteam")
  }
  document.getElementById("demo").innerHTML = text;
}
