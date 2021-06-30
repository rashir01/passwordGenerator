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
  function to capture the type of characters allowed in the password. It will prompt
  the user using confirm() to include the desired character set. Once done with the prompts, the charSet string will be updated to include the desired characters. If no character sets are selected, all of the them will be included. Valid character sets are: 
    1. Capital letters
    2. Small letters
    3. Numbers
    4. Special characters
  parameters: none
  return: none
*/
function captureCharacterSet() {
  //reset charSet so that when generating more than one password, the charSet will be updated
  charSet = "";
  if (confirm('Do you want to use capital letters?')) {
    charSet += capitalLetters;
  }
  if (confirm('Do you want ot use small letters?')) {
    charSet += smallLetters;
  }
  if (confirm('Do you want to use numbers?')) {
    charSet += numbers;
  }
  if (confirm('Do you want to use special chars?')) {
    charSet += specialChars;
  }
  if (charSet === "") {
    alert('You did not select any type. Defaulting to all characters');
    charSet = capitalLetters + smallLetters + numbers + specialChars;
  }
}

/*
  Random number generator. It will return a value between 0 and max. 
  input: max - the maximum number to be generated
  return: a number between 0 and max
*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*
  function to generate the password. Using the passwordLength value as input, the function will generate a password with the same number of characters. To select the characters randomly, the function will use the math function to generate a number between 0 and the length of charSet. It will then append the character in the charSet at the random number location to the password. 
  input: passwordLength: the length of the password to be generated
  returns: the generated password
*/ 
function generatePassword(passwordLength) {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password = password += charSet.charAt(getRandomInt(charSet.length));
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);