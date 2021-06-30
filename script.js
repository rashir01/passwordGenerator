// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/*
  function to capture the length of the password from the user. 
  Password length must be between 8-128. Fucntion will keep prompting the user
  until a valid password length is submitted
  parameters: none
  return: passwordLength a number between 8-128
  */
  function capturePasswordLength() {
    let passwordLength = prompt('Enter the number of characters');
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert('Invalid number of characters. Enter 8-128');
      passwordLength = prompt('Enter the number of characters'); 
    }
    return passwordLength;
  }

  /*
  Random number generator. It will return a value between 0 and max. 
  input: max - the maximum number to be generated
  return: a number between 0 and max
*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);