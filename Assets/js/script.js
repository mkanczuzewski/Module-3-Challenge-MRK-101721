// Assignment Code
var generateBtn = document.querySelector("#generate");{
  //ask for length of password between 8 and 128 characters
  var promptLength = window.prompt('How many characters would you like? Pick a number between 8 and 128.');{
    //validate prompt answer
    if (promptLength === "" || promptLength === null) {
      window.alert("You did not pick a valid option. Try again.");
      return passwordLength();
    }
    if (promptLength > 7 && promptLength < 129) {
      promptLength = parseInt(promptLength);
    }
    else {
      window.alert("You did not pick a valid option. Try again.");
      return passwordLength();
    }
  }
  //ask if user wants lower case letters
  var promptLowerAlpha = window.confirm("Do you want lower case characters?")
  if (promptLowerAlpha) {
    passwordChar =+ charLowerAlpha;
  }
  //ask if user wants upper case letters
  var promptUpperAlpha = window.confirm("Do you want upper case characters?")
  //ask if user wants numeric characters
  var promptNumeric = window.confirm("Do you want numeric characters?")
  //ask if user wants special characters
  var promptSpecial = window.confirm("Do you want special characters?")
  //Get at least one type of character
  while (!(promptLowerAlpha || promptUpperAlpha || promptNumeric || promptSpecial)) {
    window.alert("You must select at least one character type!");
    var promptLowerAlpha = window.confirm("Do you want lower case characters?")
    var promptUpperAlpha = window.confirm("Do you want upper case characters?")
    var promptNumeric = window.confirm("Do you want numeric characters?")
    var promptSpecial = window.confirm("Do you want special characters?")
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


