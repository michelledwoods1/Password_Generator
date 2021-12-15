// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var generatePassword = function() { 

  var password = "";

  var pwordCriteria = [];

  var lowerOptions = ["abcdefghijklmnopqrstuvwxyz".split("")];

  var upperOptions = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
  
  var numbersOptions = [" 0123456789".split("")];
  
  var specialChar = [" !#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("")];
  
  console.log(specialChar);
  console.log(lowerOptions);
  console.log(upperOptions);
  console.log(numbersOptions);
  

var userLength = prompt("How many characters would you like?", "Enter a number between 8 and 128");

if (!userLength) {
  return;
}
  else if (
  (userLength<8 && userLength>128) 
) {console.log(userLength);
  alert("Number must be between 8 and 128.  To try again, select 'Ok' and re-select the 'Generate Password' button");
    return;
}
  else {
  console.log(userLength);
  alert("Your password is set to " + userLength + " characters.  Next, please select at least ONE of the four available character types.");
  var lowercase = confirm("Include lowercase?");
  var uppercase = confirm("Include uppercase?");
  var numbers = confirm("Include numbers?");
  var specialChar = confirm("Include Special Characters?");}

  console.log(lowercase);
  console.log(uppercase);
  console.log(numbers);
  console.log(specialChar);

if (
    (!lowercase && !uppercase && !numbers && !specialChar) 
 ) {
    alert("Sorry, we are unable to generate your password at this time.  At least ONE charater type must be selected. To try again, select 'Ok' and re-select the 'Generate Password' button");
  }
  if (lowercase) {
    pwordCriteria.push(lowerOptions);
  }
  if (uppercase) {
    pwordCriteria.push(upperOptions);
  }
  if (numbers) {
    pwordCriteria.push(numbersOptions);
  }
  console.log(pwordCriteria);

  for (var i = 0; i < userLength; i++) {
    var randomPword = Math.floor(Math.random() * pwordCriteria.length);
password += pwordCriteria.substring(randomNumber, randomNumber +1);
  }

}
