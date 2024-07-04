// script.js
document.addEventListener("DOMContentLoaded", () => {
    
    const includeNumbers = document.getElementById("includeNumbers");
    const includeLetters = document.getElementById("includeLetters");
    const includeMixedCase = document.getElementById("includeMixedCase");
    const includePunctuation = document.getElementById("includePunctuation");
    const passwordDisplay = document.getElementById("passwordDisplay");

    const gen_button = document.querySelector(".gen_pass");
    const charRange = document.querySelector(".slider_value");
    const copyButton = document.querySelector(".copy_pass");

    const len_display = document.querySelector(".len");
    const message = document.querySelector(".msg");

    const numbers = "0123456789";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const mixedCaseLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


    len_display.textContent = charRange.value;

    charRange.addEventListener("input", () => {
        // charRangeValue.textContent = charRange.value;
        len_display.textContent = charRange.value;
    });

    

    gen_button.addEventListener("click", () => {
        let characters = "";
        if (includeNumbers.checked) characters += numbers;
        if (includeLetters.checked) characters += letters;
        if (includeMixedCase.checked) characters += mixedCaseLetters;
        if (includePunctuation.checked) characters += punctuation;

        if (!includeNumbers.checked && !includeLetters.checked && !includeMixedCase.checked && !includePunctuation.checked) {
            message.textContent = "Please select at least one option!";
        }
        else{
            message.textContent = "";

        }

        passwordDisplay.value = generatePassword(charRange.value, characters);
    });

    

    const generatePassword = (length, characters) => {
        let password = "";
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    }

    copyButton.addEventListener("click", () => {
        if(passwordDisplay.value){
            passwordDisplay.select();
            document.execCommand("copy");
            // alert("Password copied to clipboard!");
            message.textContent = "Content Copied to Clipboard";

        }
        
    });
});
