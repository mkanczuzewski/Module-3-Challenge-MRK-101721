// create a list of allowed characters
var charLowerAlpha = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var charUpperAlpha = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
var charNumber = [1,2,3,4,5,6,7,8,9,0];
var charSpecial = ['!','@','#','%','^','&','*','?','%','~'];

// Assignment Code
var generateBtn = document.querySelector("#generate");{
  //ask for length of password between 8 and 128 characters
  var promptLength = window.prompt('How many characters would you like? Pick a number between 8 and 128.'); {
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
    if (promptUpperAlpha) {
      passwordChar =+ charUpperAlpha
    }
  //ask if user wants numeric characters
  var promptNumeric = window.confirm("Do you want numeric characters?")
    if (promptNumeric) {
      passwordChar =+ charNumber
    }
  //ask if user wants special characters
  var promptSpecial = window.confirm("Do you want special characters?")
    if(promptSpecial) {
      passwordChar =+ charSpecial
    }
  //Get at least one type of character
  while (!(promptLowerAlpha || promptUpperAlpha || promptNumeric || promptSpecial)) {
    window.alert("You must select at least one character type!");
    var promptLowerAlpha = window.confirm("Do you want lower case characters?")
      if (promptLowerAlpha) {
        passwordChar =+ charLowerAlpha;
      }
    var promptUpperAlpha = window.confirm("Do you want upper case characters?")
      if (promptUpperAlpha) {
        passwordChar =+ charUpperAlpha
      }
    var promptNumeric = window.confirm("Do you want numeric characters?")
      if (promptNumeric) {
        passwordChar =+ charNumber
      }
    var promptSpecial = window.confirm("Do you want special characters?")
      if(promptSpecial) {
        passwordChar =+ charSpecial
      }
  }
  //generate password with characters
  //use (math.floor(math.random))
  //loop with restriction to passwordLength
  //pick character type at random
  //select chracter at random
  //go to next position until complete
  for (var i = 0; i < promptLength; i++) {
    password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }

  //push password back to secure password textbox

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);