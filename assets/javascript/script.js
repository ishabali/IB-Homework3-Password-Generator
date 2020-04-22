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
  
  var randNo = 0;
  for (i = 0; i < userLen; i++){
    // Generate random no. between 0 and len1
    randNo = Math.floor(Math.random()*len1);
    finalPassArray.push(fullPassArray2[randNo]);
  }
  return finalPassArray;
}

// ----------------------------------------------------------------------------------------
function makePasswordArray(){
// Generating Password Choices Array
  var passChoices= [] ;
  var check1 = false;
  check1 = document.getElementById("check1").checked;
  var lCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if (check1===true) {
    var lCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    passChoices = passChoices.concat(lCase);
  }

  var check2 = false;
  check2 = document.getElementById("check2").checked;
  if (check2===true) {
    var uCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    passChoices = passChoices.concat(uCase);
  }

  var check3 = false;
  check3 = document.getElementById("check3").checked;
  if (check3===true) {
    var nPass = ['0','1','2','3','4','5','6','7','8','9'];
    passChoices = passChoices.concat(nPass);
  }

  var check4 = false;
  check4 = document.getElementById("check4").checked;
  if (check4===true) {
  //  var spCase = ['','!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',',',':',';','<','=','>','?','@','[','\',']','^','_','`','{','|','}','~'];*/
      var spCase = ['','!','"','#','$','%','&',"'",'(',')','*','+','-','.','/',',',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
      passChoices = passChoices.concat(spCase);
  }

  return passChoices;
}

// --------------------------------------------------------------------------

function writePassword(){
     document.getElementById("password").innerHTML = "";
    var userChoices=[];
 
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
    var userLength = 8;
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
 
    finalPassArray=makeFinalPassArray(fullPassArray,userLength);
    finalPassword="";
    for (i = 0; i < finalPassArray.length; i++){
      finalPassword = finalPassword + finalPassArray[i];
    }
    document.getElementById("password").innerHTML = finalPassword;
}
