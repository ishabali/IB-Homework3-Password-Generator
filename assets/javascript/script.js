// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




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


function makePasswordArray(){
// Generating Password Choices Array
  var passChoices= [] ;
  var a = 1;
  var lCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if (a===1){
    alert("in if a = 1");
    passChoices = passChoices.concat(lCase);
  }

  var a = 1;
  var uCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  if (a===1){
    alert("in if a = 1");
    passChoices = passChoices.concat(uCase);
  }

  var a = 1;
  var nPass = ['0','1','2','3','4','5','6','7','8','9'];
  if (a===1){
    alert("in if a = 1");
    passChoices = passChoices.concat(nPass);
  }

  var a = 1;
  /*var spCase = ['','!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',',',':',';','<','=','>','?','@','[','\',']','^','_','`','{','|','}','~'];*/
  var spCase = ['','!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',',',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
  if (a===1){
    alert("in if a = 1");
    passChoices = passChoices.concat(spCase);
  }

  for (i = 0; i < passChoices.length; i++){
    alert(passChoices[i]);
  }
}

function writePassword(){
    alert("in write password function");
    makePasswordArray();
 
}