// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

}

var generatePassword = function() {
    //alert("function generate password fired");
    
    do {
        var promptLength = window.prompt('How many characters would you like? Pick a number between 8 and 128.');
    }
    while (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128);
        
        //validate prompt answer
        if (promptLength === "" || promptLength === null) {
          window.alert("You did not pick a valid option. Try again.");
          return promptLength();
        }
        if (promptLength > 7 && promptLength < 129) {
          promptLength = parseInt(promptLength);
        }
        else {
          window.alert("You did not pick a valid option. Try again.");
           //return promptLength();
        }
      }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
