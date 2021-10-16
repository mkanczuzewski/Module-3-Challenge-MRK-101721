// Assignment Code
var generateBtn = document.querySelector("#generate");

  //ask for length of password between 8 and 128 characters
  var passwordLength = function() {
    //number of characters
    var promptLength = window.prompt('How many characters would you like? Pick a number between 8 and 128')
    
    //validate prompt answer
    if (promptLength === "" || promptLength === null) {
      window.alert("You did not pick a valid option. Try again.");
      return passwordLength();
    }
    
    if (promptLength > 7 && promptLength < 129) {
      return promptLength;
    }
    
    else
      window.alert("You did not pick a valid option. Try again.");
      return passwordLength();
  }
  
  //ask if user wants lower case letters
  var promptLowerAlpha = window.confirm("Do you want lower case characters?")
  //ask if user wants upper case letters
  var promptUpperAlpha = window.confirm("Do you want upper case characters?")
  //ask if user wants numeric characters
  var promptNumeric = window.confirm("Do you want numeric characters?")
  //ask if user wants special characters
  var promptSpecial = window.confirm("Do you want special characters?")
  //generate password with characters

  //push password back to secure password textbox

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


