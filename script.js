var myInput = document.getElementById("exampleInputPassword1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Show the message box when the user focuses on the password field
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// Hide the message box when the user clicks outside the password field
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// Validate the password when the user types in the field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (lowerCaseLetters.test(myInput.value)) {
    letter.className = "valid";
  } else {
    letter.className = "invalid";
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (upperCaseLetters.test(myInput.value)) {
    capital.className = "valid";
  } else {
    capital.className = "invalid";
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (numbers.test(myInput.value)) {
    number.className = "valid";
  } else {
    number.className = "invalid";
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.className = "valid";
  } else {
    length.className = "invalid";
  }
};
