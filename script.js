var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var special = ["!","@","#","$","%","^","&","*","(",")",]

function passwordchoice () {
    var length = parseInt (prompt("How many characters do you want?")) 
    if (isNaN(length)===true){
        alert("Please provide the password length as a number")
        return
    } if(length<8) {
        alert("password must be at least 8 characters")
        return
    } if(length>128) {
        alert("password must be at less than 128 characters")
        return
    }
    var wantLower = confirm ("click okay if you want lowercase in your password")
    var wantUpper = confirm ("click okay if you want uppercase")
    var wantNumbers = confirm ("click okay if you want numbers")
    var wantSpecial = confirm ("click okay if you want special")
    if (wantLower === false && wantUpper === false && wantNumbers === false && wantSpecial === false) {
        alert ("Please select password type so that password can be generated")
        return
    }
    var passwordops = {
        length:length,
        wantLower:wantLower,
        wantUpper:wantUpper,
        wantNumbers:wantNumbers,
        wantSpecial:wantSpecial,
    }
    return passwordops
}

function randomselect (array) {
    var randomindex = Math.floor (Math.random()*array.length)
    var randomel = array [randomindex]
    return randomel
} 


function generatePassword () {
    var choice = passwordchoice()
    var result = []
    var possible = []
    var qurantee = []
    if (choice.wantLower){
        possible = possible.concat (lowercase)
        qurantee.push (randomselect(lowercase))

    }
    if (choice.wantUpper){
        possible = possible.concat (uppercase)
        qurantee.push (randomselect(uppercase))

    }
    if (choice.wantNumbers){
        possible = possible.concat (numbers)
        qurantee.push (randomselect(numbers))

    }
    if (choice.wantSpecial){
        possible = possible.concat (special)
        qurantee.push (randomselect(special))

    }
    for(var i=0; i < choice.length; i++) {
        var select = randomselect (possible)
        result.push (select)
    }
    for(var i=0; i < qurantee.length; i++){
        result [i] = qurantee [i]
    }
    return result.join ("")
}


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
