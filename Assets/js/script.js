// Assignment Code
// create a list of allowed characters
//var charLowerAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//var charUpperAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var charLowerAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var charUpperAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var charLowerAlpha = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var charUpperAlpha = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
var charNumber = [1,2,3,4,5,6,7,8,9,0];
var charSpecial = ['!','@','#','%','^','&','*','?','%','~'];
var passwordChar = ""

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
    else if (promptLength < 8 && promptLength > 128) {
    window.alert("You did not pick a valid option. Try again.");
    }
    else{
        promptLength = parseInt(promptLength);
    }
  }
  while (isNaN(promptLength) || promptLength < 8 || promptLength > 128);
  console.log(promptLength)

  //prompt if they want lower case alpha characters
  var promptLowerAlpha = window.confirm("Do you want lower case characters?")
  if (promptLowerAlpha) {
  passwordChar += charLowerAlpha;
  passwordChar += ','
  console.log(passwordChar);
  console.log(charLowerAlpha);
  }

  //ask if user wants upper case letters
  var promptUpperAlpha = window.confirm("Do you want upper case characters?")
  if (promptUpperAlpha) {
  passwordChar += charUpperAlpha;
  passwordChar += ','
  console.log(passwordChar);
  console.log(charUpperAlpha);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
