// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);



function generatePassword() {
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~", "=", "@", "^"];
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


   // A message informing you that you need to have 8 min characters - 128 max characters
  var preReady = []
  var postReady = ""

  var numberOfCharacters = prompt("Decide how long you want your password to be using at least 8 characters minium and 128 characters maxium")
  if (numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    alert("Password length does not meet the parameters, Please retry")
  } else {
    // validating uppercase letters characters
    if (confirm("do you want to have uppercase letters in your character?")) {
      preReady = preReady.concat(uppercaseCharacters)
    }
    // validating lowercase letters characters
    if (confirm("do you want to have lowercase letters in your character?")) {
      preReady = preReady.concat(lowercaseCharacters)
    }
    // validating number characters
    if (hasNumbers = confirm("do you want to have Numbers in your character?")) {
      preReady = preReady.concat(numericCharacters)
    }
    // validating special key characters
    if (hasSpecial = confirm("do you want to have Special keys in your character?")) {
      preReady = preReady.concat(specialCharacters)
    }
    if (preReady.length === 0) {
      alert("You need to have at least one character in your password ");
    } else {
      for (let i = 0; i < numberOfCharacters; i++) {
        let rng = Math.floor(Math.random() * preReady.length);
        // generated password final & rng
        postReady += preReady[rng];
      }
    }
    document.getElementById("password").innerHTML = postReady
  }
};