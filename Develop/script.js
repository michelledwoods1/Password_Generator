// Assignment Code
var generateBtn = document.querySelector("#generate");

// var userLength = window.prompt("Choose your password length (betwen 8 and 128", "Enter number");
// var userChars = window.prompt("Choose your character types (must select at least 1 type):");


var Length = []

const range = (min,max) => []
// if (userLength.includes (!== ) {
//   alert("please enter a valid length");
// } else {
//   console.log(length);

//   // Adds text content to created tag
//   tag.textContent = "This was made via prompts. It's a " + tagName + ".";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function 





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generatePassword ()

///my code below
/*
var length = window.prompt("Choose a length betwen 8 and 128");
var characters = window.prompt("Choose your character typesa length betwen 8 and 128");


  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }

    //" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


/*
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  var tag = document.createElement(tagName);

  // Adds text content to created tag
  tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");

if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
    document.body.appendChild(secondTag);
  

    // Keydown event
textAreaEl.addEventListener('keydown', function (event) {
  // Access value of pressed key with key property
 var key = event.key.toLowerCa se();
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');
  if (alphabetNumericCharacters.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

clearEl.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaEl.value = '';

  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});
*/