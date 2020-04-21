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

// ----------------------------------------------------------------------------------------

// Makes Final Password Array according to length desired by user 
function makeFinalPassArray(fullPassArray2,userLen){
  var finalPassArray=[];
  var len1 = fullPassArray2.length;
  //IMP>>>> have to change value of userLen
  //var userLen = 5;
  var randNo = 0;
  for (i = 0; i < userLen; i++){
    // Generate random no. between 0 and len1
    randNo = Math.floor(Math.random()*len1);
    alert("random no." + randNo);
    finalPassArray.push(fullPassArray2[randNo]);
    alert(finalPassArray[i]);
  }
  return finalPassArray;
}

// ----------------------------------------------------------------------------------------
function makePasswordArray(){
// Generating Password Choices Array
  var passChoices= [] ;
  var a = 2;
  var lCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if (a===1){
    // alert("in if a = 1");
    passChoices = passChoices.concat(lCase);
  }

  var a = 2;
  var uCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  if (a===1){
    // alert("in if a = 1");
    passChoices = passChoices.concat(uCase);
  }

  var a = 1;
  var nPass = ['0','1','2','3','4','5','6','7','8','9'];
  if (a===1){
    // alert("in if a = 1");
    passChoices = passChoices.concat(nPass);
  }

  var a = 2;
  /*var spCase = ['','!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',',',':',';','<','=','>','?','@','[','\',']','^','_','`','{','|','}','~'];*/
  var spCase = ['','!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',',',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
  if (a===1){
    // alert("in if a = 1");
    passChoices = passChoices.concat(spCase);
  }

// This for loop has to be removed later
  for (i = 0; i < passChoices.length; i++){
    alert(passChoices[i]);
  }
  
  return passChoices;
}
// -------------------------------------------------------------------------

// function getUserChoices(){
//   var userChoices = [];
//   var userLength = document.getElementById("len1").value;
//   alert("userLength"+userLength);
//   userChoices[0] = userLength;
//   alert("length2"+userChoices[0]);
//   return userChoices;
// }

// --------------------------------------------------------------------------

function lengthFunction(){
//  var userLength = 0;
  userLength = document.getElementById("len1").value;

  //Check that User Length Input is a no. default input 8 taken
  if(isNaN(userLength)){
    alert(userLength + " is not a number");
   }else if (userLength < 8){
    alert("Default Password Length 8 will be taken"); 
    userLength = 8;
   }else if (userLength > 128){
    alert("Default Password Length 128 will be taken"); 
    userLength = 8;
   }
  }

// --------------------------------------------------------------------------

function writePassword(){
 /*   alert("in write password function"); */
    document.getElementById("password").innerHTML = "";
    var userChoices=[];
    alert("length1");
 //   userChoices=getUserChoices();
    fullPassArray=[];
    fullPassArray=makePasswordArray();
    alert("fullPassArrayLength"+fullPassArray.length);
    // Default Password Length = 8;
    var userLength = 8;
    userLength = document.getElementById("len1").value;
    alert("userLengthFin"+userLength);
    finalPassArray=makeFinalPassArray(fullPassArray,userLength);
    finalPassword="";
    for (i = 0; i < finalPassArray.length; i++){
      finalPassword = finalPassword + finalPassArray[i];
    }
    alert(finalPassword);
    document.getElementById("password").innerHTML = finalPassword;
}
