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
   // alert("random no." + randNo);
    finalPassArray.push(fullPassArray2[randNo]);
   // alert(finalPassArray[i]);
  }
  return finalPassArray;
}

// ----------------------------------------------------------------------------------------
function makePasswordArray(){
// Generating Password Choices Array
  var passChoices= [] ;


  //var a = 1;
  // var check1 = false;
  // check1 = document.getElementById("check1").checked;
  // var check2 = false;
  // check2 = document.getElementById("check2").checked;
  // var check3 = false;
  // check3 = document.getElementById("check3").checked;
  // var check4 = false;
  // check4 = document.getElementById("check4").checked;


  // if ((check1 === false)&&(check2 === false)&&(check3 === false)&&(check4 === false)) {
  //   alert("At Least Choose One Type of Characters for your Password");
  //  // passChoices=[];
  //   return passChoices;
  // } 


  var check1 = false;
  check1 = document.getElementById("check1").checked;
  var lCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  // if (a===1){
  if (check1===true) {
    // alert("in if a = 1");
    var lCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    passChoices = passChoices.concat(lCase);
  }

  //var a = 1;
  var check2 = false;
  check2 = document.getElementById("check2").checked;
  //var uCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  //if (a===1){
  if (check2===true) {
    // alert("in if a = 1");
    var uCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    passChoices = passChoices.concat(uCase);
  }

  //var a = 1;
  var check3 = false;
  check3 = document.getElementById("check3").checked;
  //var nPass = ['0','1','2','3','4','5','6','7','8','9'];
//  if (a===1){
  if (check3===true) {
//    alert("a" + a);
    var nPass = ['0','1','2','3','4','5','6','7','8','9'];
    passChoices = passChoices.concat(nPass);
  }

//  var a = 1;
  var check4 = false;
  check4 = document.getElementById("check4").checked;
  //alert("check4"+check4);
  //var spCase = ['','!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',',',':',';','<','=','>','?','@','[','\',']','^','_','`','{','|','}','~'];*/
  //var spCase = ['','!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',',',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
 //if (a===1){
  if (check4===true) {
  //  var spCase = ['','!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',',',':',';','<','=','>','?','@','[','\',']','^','_','`','{','|','}','~'];*/
      var spCase = ['','!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',',',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
      passChoices = passChoices.concat(spCase);
  }

// This for loop has to be removed later
  // for (i = 0; i < passChoices.length; i++){
  //   alert(passChoices[i]);
  // }
  
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

// function lengthFunction(){
// //  var userLength = 0;
//   userLength = document.getElementById("len1").value;

//   //Check that User Length Input is a no. default input 8 taken
//   if(isNaN(userLength)){
//     alert(userLength + " is not a number");
//    }else if (userLength < 8){
//     alert("Default Password Length 8 will be taken"); 
//     userLength = 8;
//    }else if (userLength > 128){
//     alert("Default Password Length 128 will be taken"); 
//     userLength = 128;
//    }
//   }

// --------------------------------------------------------------------------

function writePassword(){
 /*   alert("in write password function"); */
    document.getElementById("password").innerHTML = "";
    var userChoices=[];
 //   alert("length1");
 //   userChoices=getUserChoices();
   

    var check1 = false;
    check1 = document.getElementById("check1").checked;
    var check2 = false;
    check2 = document.getElementById("check2").checked;
    var check3 = false;
    check3 = document.getElementById("check3").checked;
    var check4 = false;
    check4 = document.getElementById("check4").checked;
    if ((check1 === false)&&(check2 === false)&&(check3 === false)&&(check4 === false)) {
      alert("Check at least One password criterion");
      var finalPassword="";
      document.getElementById("password").innerHTML = finalPassword;
      return;
    } 

    var fullPassArray=[];
    fullPassArray=makePasswordArray();
    // if (fullPassArray.length===0){
    //   finalPassword="";
    //   alert("At Least Choose One Type of Characters for your Password");
    //   document.getElementById("password").innerHTML = finalPassword;
    //   return;
    // }

   // alert("fullPassArrayLength"+fullPassArray.length);
    // Default Password Length = 8;
    var userLength = 8;
 //   userLength = document.getElementById("len1").value;
 userLength = document.getElementById("len1").value;

 //Check that User Length Input is a no. default input 8 taken
 if(isNaN(userLength)){
   alert(userLength + " is not a number");
  }else if (userLength < 8){
   alert("Default Password Length 8 will be taken"); 
   userLength = 8;
  }else if (userLength > 128){
   alert("Default Password Length 128 will be taken"); 
   userLength = 128;
  }
 
 
 //   alert("userLengthFin"+userLength);
    finalPassArray=makeFinalPassArray(fullPassArray,userLength);
    finalPassword="";
    for (i = 0; i < finalPassArray.length; i++){
      finalPassword = finalPassword + finalPassArray[i];
    }
   // alert(finalPassword);
    document.getElementById("password").innerHTML = finalPassword;
}
