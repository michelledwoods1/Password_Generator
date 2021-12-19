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





// create the generatePassword function as referenced in writePassword()
var generatePassword = function() { 


  // ask user for the total number of password characters.  use parseInt to ignore non-numerial responses
  var passwordTotal = parseInt(prompt("Please nominate the total number of characters for your password", "Enter a number between 8 and 128"));


  //alert for invalid user input for total password characters
  while (isNaN(passwordTotal) || passwordTotal < 8 || passwordTotal > 128) {
  alert("Invalid response \nPlease enter a number between 8 and 128.  \nTo re-try, select 'OK' and re-select the 'Generate Password' button");
  return;
  }


  //alert to display valid user input for total password characters
  alert("Your password is set to " + passwordTotal + " characters.  \nNext, please confirm at least ONE of the four available character types.");


  //create character type variable and ask use to confirm
  var lowercase = confirm("Select 'OK' to include lowercase characters in your password");
  var uppercase = confirm("Select 'OK' to include uppercase characters in your password");
  var numbers = confirm("Select 'OK' to include numberial characters in your password");
  var specialChars = confirm("Select 'OK' to include special characters in your password");


  //alert to display when no character type has been confirmed
  if (!lowercase && !uppercase && !numbers && !specialChars) {
  alert("Sorry, password could not be generated: \nYou must confirm as least ONE charater type. \nTo re-try, select 'OK' and re-select the 'Generate Password' button.");
  return;
  }


  //set variables for each character type ".split("")];
  var lowercaseRange = "abcdefghijklmnopqrstuvwxyz".split("");
  var uppercaseRange = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbersRange = "0123456789".split("");
  var specialCharsRange = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");


  // create variabale to count the number of selected character types
  var forcedChars = 0


  // create array to store selected character types
  var selectedChars = []


  //create variable to store the new password characters
  newPassword = ""


  //to ensure the password include at least one of each of the selected character types
  if (lowercase) {
    selectedChars = selectedChars.concat(lowercaseRange);
    var index = Math.floor(Math.random() * lowercaseRange.length);
    var forceLower = lowercaseRange[index];
    forcedChars++
    newPassword += forceLower;
  }


  if (uppercase) {
    selectedChars = selectedChars.concat(uppercaseRange);
    var index = Math.floor(Math.random() * lowercaseRange.length);
    var forceUpper = uppercaseRange[index];
    forcedChars++
    newPassword += forceUpper;
  }


  if (numbers) {
    selectedChars = selectedChars.concat(numbersRange);
    var index = Math.floor(Math.random() * numbersRange.length);
    var forceNumbers = numbersRange[index];
    forcedChars++
    newPassword += forceNumbers;
  }


  if (specialChars) {
    selectedChars = selectedChars.concat(specialCharsRange);
    var index = Math.floor(Math.random() * specialCharsRange.length);
    var forceSpecial = specialCharsRange[index];
    forcedChars++
    newPassword += forceSpecial;
  }


  console.log(forcedChars);
  console.log(newPassword);
  console.log(selectedChars);


  //get remaining number of password characters as random indicies from all selected characters

  for (var i = forcedChars; i < passwordTotal; i++) {
    var index = Math.floor(Math.random() * selectedChars.length);
    newPassword += selectedChars[index];
  }


  console.log(newPassword);

  return newPassword;


  }


  

