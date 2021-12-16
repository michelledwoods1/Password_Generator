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




  var lcRange = ["abcdefghijklmnopqrstuvwxyz".split("")];

  var ucRange = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
  
  var numberRange = [" 0123456789".split("")];
  
  var specialRange = [" !#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("")];

  var pwCriteria = lcRange.concat(ucRange).concat(numberRange).concat(specialRange);

  console.log(pwCriteria);
    
var userLength = prompt("How many characters would you like?", "Enter a number between 8 and 128");

if (!userLength) {
  return;
}
  else if (
  (userLength<8 || userLength>128) 
) {console.log(userLength);
  alert("Number must be between 8 and 128.  To try again, select 'Ok' and re-select the 'Generate Password' button");
  return;
  
} else if (
  (!userLength)
  ) {console.log(userLength);
    alert("Please enter a valid number must be between 8 and 128.  To try again, select 'Ok' and re-select the 'Generate Password' button");
      return;
  } else {
  console.log(userLength);
  alert("Your password is set to " + userLength + " characters.  Next, please select at least ONE of the four available character types.");
  var lc = confirm("Include lowercase?");
  var uc = confirm("Include uppercase?");
  var number = confirm("Include numbers?");
  var special = confirm("Include Special Characters?");}

if (
    (!lc && !uc && !number && !special) 
 ) {
    alert("Sorry, we are unable to generate your password:  At least ONE charater type must be selected. To try again, select 'Ok' and re-select the 'Generate Password' button.");
  }
if (lc) {
    var index =  Math.floor(Math.random() * lcRange.length);
    console.log(ucRange.length);
    var fixedlc = lcRange[index];
}
    alert("did it work? " + fixedlc);
}
  if (uppercase) {
    pwordCriteria.push(upperOptions);
  // }
  // if (numbers) {
  //   pwordCriteria.push(numbersOptions);
  // }
  // console.log(pwordCriteria);

}
