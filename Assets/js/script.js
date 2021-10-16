// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

}

var generatePassword = function() {
    //loop until correct number is entered
  do {
    var promptLength = window.prompt('How many characters would you like? Pick a number between 8 and 128.');
    //validate prompt answer
    if (isNaN(promptLength)) {
    window.alert("You did not pick a valid option. Try again.");
    }
    else if (promptLength < 8 && promptLength > 128) {
    window.alert("You did not pick a valid option. Try again.");
    }
    else{
        promptLength = parseInt(promptLength);
    }
  }
  while (isNaN(promptLength) || promptLength < 8 || promptLength > 128);
  console.log(promptLength)
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
