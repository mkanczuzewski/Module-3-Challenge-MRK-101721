// Assignment Code
// create a list of allowed characters
var charLowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var charUpperAlpha = "";
var charNumber = ["1234567890"];
var charSpecial = ["!@#%^&*,?%~()"];
var passwordChar = "";
var fullString = "";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
}

var generatePassword = function() {
  //loop until correct number length is entered
  do {
    var promptLength = window.prompt('How many characters would you like? Pick a number between 8 and 128.');
    //validate prompt answer
    if (isNaN(promptLength)) {
    window.alert("You did not pick a valid option. Try again.");
    }
    else if (promptLength < 8 || promptLength > 128) {
    window.alert("You did not pick a valid option. Try again.");
    }
    else{
        promptLength = parseInt(promptLength);
    }
  }
  while (isNaN(promptLength) || promptLength < 8 || promptLength > 128);
  console.log(promptLength)
  //debugger;
  do {
    //prompt if they want lower case alpha characters
    var promptLowerAlpha = window.confirm("Do you want lower case characters?")
    if (promptLowerAlpha) {
      passwordChar += charLowerAlpha;
      console.log(passwordChar);
    }

    //ask if user wants upper case letters
    var promptUpperAlpha = window.confirm("Do you want upper case characters?")
    if (promptUpperAlpha) {
      passwordChar += charLowerAlpha.toUpperCase();
      console.log(passwordChar);
    }

    //ask if user wants numeric characters
    var promptNumeric = window.confirm("Do you want numeric characters?")
    if (promptNumeric) {
      passwordChar += charNumber
      console.log(passwordChar);
    }

    //ask if user wants special characters
    var promptSpecial = window.confirm("Do you want special characters?")
    if (promptSpecial) {
      passwordChar += charSpecial
      console.log(passwordChar);
    }

    if (passwordChar == "" || passwordChar == null) {
      window.alert("You to pick at least one value. Please try again.");
    }
  }
  while (passwordChar == "" || passwordChar == null)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
