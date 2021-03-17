var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var special = ["!","@","#","$","%","^","&","*","(",")",]

function passwordchoice () {
    var plength = parseInt (prompt("How many characters do you want?")) 
    if (isNaN(plength)===true){
        alert("Please provide the password length as a number")
        return
    } if (plength < 8 || plength > 128) {
        alert("Password needs to be greater than 8 characters and less than 128 characters")
        return
    }
    var wantlower = confirm ("click okay if you want lowercase in your password")
    var wantupper = confirm ("click okay if you want uppercase")
    var wantnumbers = confirm ("click okay if you want numbers")
    var wantspecial = confirm ("click okay if you want special")
    if (wantlower === false && wantupper === false && wantnumbers === false && wantspecial === false) {
        alert ("Please select password type so that password can be generated")
    }
    var passwordops = {
        plength:plength,
        wantlower:wantlower,
        wantupper:wantupper,
        wantnumbers:wantnumbers,
        wantspecial:wantspecial,
    }
    return passwordops
}

function randomselect (array) {
    var randomindex = Math.floor (Math.random()*array.length)
    var randomel = array [randomindex]
    return randomel
} 


function generatePassword () {
    var choice = passwordchoice ()
    var result = []
    var possible = []
    var qurantee = []
    if (choice.wantlower){
        possible = possible.concat (lowercase)
        qurantee.push (randomselect(lowercase))

    }
    if (choice.wantupper){
        possible = possible.concat (uppercase)
        qurantee.push (randomselect(uppercase))

    }
    if (choice.wantnumbers){
        possible = possible.concat (numbers)
        qurantee.push (randomselect(numbers))

    }
    if (choice.wantspecial){
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
