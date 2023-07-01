// Assignment code here
var minNum = 8;
var maxNum = 128;
var possibleChar = "";
let genPassword = "";
let length;
//generate password
function generatePassword(length, specialChar,numbers,lowerCase,upperCase){
  //Listing all the possible character that can be used within the password
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "!@#$%^&*()_-+=<>?/{}[]|";
  const numbersChars = "0123456789";


//Setting conditions that were made before, if user pressed "cancel" then nothing will be made 
// Otherwise if they clicked "OK" then those characters would be added into the password
  if (specialChar){
    possibleChar += specialChars;
  }
  if(numbers){
    possibleChar += numbersChars;
  }
  if(lowerCase){
    possibleChar += lowerCaseChars;
  }
  if(upperCase){
    possibleChar += upperCaseChars;
  }
  if(!possibleChar){
    alert("Please choose at least one thing");
  }

// Incrementing the code so that it takes in random charcters and smashing them together
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChar.length);
    genPassword += possibleChar[randomIndex];
}
// return to make new of the variable 
return genPassword;
}




while(true){
  let howLong = prompt("How many characters would you like your password to contain?");
  length = parseInt(howLong);
  if(length < minNum || length > maxNum ){
    confirm("Choose a length between 8 and 128 characters!!");
  }
     else break;
}
  const specialChar = confirm("Click OK to confirm including special characters.")
  const numbers = confirm("Click OK to confirm including numbers.");
  const lowerCase = confirm("Click OK to confirm including lowercase characters.");
  const upperCase = confirm("Click OK to confirm including uppercase characters.");
//}
generatePassword(length, specialChar,numbers,lowerCase,upperCase);
// writePassword();


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
