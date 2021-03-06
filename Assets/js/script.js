// Assignment Code
// create a list of allowed characters
var charLowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var charUpperAlpha = "";
var charNumber = ["1234567890"];
var charSpecial = ["!@#%^&*,?%~()"];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generatePassword = function() {
  var passwordChar = "";
  var singleChar = "";
  var fullPassword = "";
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

  do {
    //prompt if they want lower case alpha characters
    var promptLowerAlpha = window.confirm("Do you want lower case characters?")
    if (promptLowerAlpha) {
      passwordChar += charLowerAlpha;
    }

    //ask if user wants upper case letters
    var promptUpperAlpha = window.confirm("Do you want upper case characters?")
    if (promptUpperAlpha) {
      passwordChar += charLowerAlpha.toUpperCase();
    }

    //ask if user wants numeric characters
    var promptNumeric = window.confirm("Do you want numeric characters?")
    if (promptNumeric) {
      passwordChar += charNumber
    }

    //ask if user wants special characters
    var promptSpecial = window.confirm("Do you want special characters?")
    if (promptSpecial) {
      passwordChar += charSpecial
    }
    //Get at least one type of character
    if (passwordChar == "" || passwordChar == null) {
      window.alert("You need to pick at least one criteria. Please try again.");
    }
  }
  while (passwordChar == "" || passwordChar == null)

  for (var i = 0; i < promptLength; i++) {
    singleChar = passwordChar[Math.floor(Math.random() * passwordChar.length)];
    fullPassword += singleChar; 
  }
  return fullPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
