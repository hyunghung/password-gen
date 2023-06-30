// Assignment code here
var howLong = prompt("How many characters would you like your password to contain?");
var minNum = 8;
var maxNum = 128;

console.log(howLong);
console.log(minNum);
console.log(maxNum);

function compare(){
  if(howLong <= minNum || maxNum <= howLong){
    confirm("Choose a length larger than 8 characters!");
    var howLong = prompt("How many characters would you like your password to contain?");
  }
  else return howLong;
};


compare();
// var specialChar = confirm("Click OK to confirm including special characters.")
// var numbers = confirm("Click OK to confirm including numbers.");
// var lowerCase = confirm("Click OK to confirm including lowercase characters.");
// var upperCase = confirm("Click OK to confirm including uppercase characters.");


//generate password
function generatePassword(){

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //puts the password onto the screen
  var passwordText = document.querySelector("#password");
//displays onto the screen 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
