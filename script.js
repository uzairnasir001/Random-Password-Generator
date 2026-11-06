let passwordInput = document.querySelector("#password");

let length = 12;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+[]{}|;:,.<>?"; 

let allChars = uppercase + lowercase + numbers + symbols;

function generatePassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];             
    while(length>password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordInput.value = password;
};

function copyPassword() {
    passwordInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
};

