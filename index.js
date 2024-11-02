/*
        String Reverser
*/
// Input and output variables
let reverseInput = document.createElement("input");
let reverseOutput = document.createElement("p");
let reverseButton = document.createElement("button");

// Button setup
reverseButton.style.width = "80px";
reverseButton.style.height = "20px";
reverseButton.style.fontSize = "13px";
reverseButton.textContent = "REVERSE";

// Placeholder text for input box
reverseInput.placeholder = "Type something...";

// Reverse string function
function ReverseString(){
    reverseOutput.textContent = 'Reversed string: ' + reverseInput.value.split("").reverse().join("");
}

// Attaching button's click to reverse function
reverseButton.addEventListener("click", ReverseString);

// Add elements to the page
document.getElementById("id_stringReverse").appendChild(reverseInput);
document.getElementById("id_stringReverse").appendChild(reverseButton);
document.getElementById("id_stringReverse").appendChild(reverseOutput);


/*
        Palindrome or Not
*/
// Input and output variables
let palindromeInput = document.createElement("input");
let palindromeOutput = document.createElement("p");
let palindromeButton = document.createElement("button");

// Button setup
palindromeButton.style.width = "90px";
palindromeButton.style.height = "20px";
palindromeButton.style.fontSize = "13px";
palindromeButton.textContent = "Palindrome?";

// Placeholder text for input box
palindromeInput.placeholder = "Type some numbers...";

// Palindrome function
function PalindromeOrNot(){
    //if statement checks if the input is numbers or not
    if (/^\d+$/.test(palindromeInput.value)){
        //if statement checks if palindrome or not
        if (palindromeInput.value === palindromeInput.value.split("").reverse().join("")) {
            palindromeOutput.textContent = "This is a palindrome!";
        } else {
            palindromeOutput.textContent = "This is NOT a palindrome.";
        }
    } else {
        palindromeOutput.textContent = "You must only write numbers.";
    }
}

// Attaching button's click to palindrome function
palindromeButton.addEventListener("click", PalindromeOrNot);

// Add elements to the page
document.getElementById("id_palindrome").appendChild(palindromeInput);
document.getElementById("id_palindrome").appendChild(palindromeButton);
document.getElementById("id_palindrome").appendChild(palindromeOutput);


/*
        Bill and Tip
*/
// Input and output variables
let billInput = document.createElement("input");
let tipInput = document.createElement("input");
let billAndTipOutput = document.createElement("p");
let billAndTipButton = document.createElement("button");

// Button setup
billAndTipButton.style.width = "90px";
billAndTipButton.style.height = "40px";
billAndTipButton.style.fontSize = "13px";
billAndTipButton.textContent = "Calculate total";

// Placeholder text for input boxes
billInput.placeholder = "Type the bill total...";
tipInput.placeholder = "Type the tip percentage...";

// Palindrome function
function BillAndTipCalculator(){
    if (billInput.value != "" && tipInput.value != ""){
        if (/^\d+$/.test(billInput.value) && /^\d+$/.test(tipInput.value)){
            let _billAmount = parseFloat(billInput.value);
            let _tipAmount = parseFloat(tipInput.value);
            let _totalAmount = _billAmount + ((_tipAmount/100)*_billAmount);

            billAndTipOutput.textContent = "With a total of $" + billInput.value.toFixed(2) + " and a " + tipInput.value + "% tip, the total is: $" + _totalAmount.toFixed(2);
        } else {
            billAndTipOutput.textContent = "Please enter only number values for both the bill and tip percentage.";
        }
    } else {
        billAndTipOutput.textContent = "Please enter a value for both the bill amount and tip percentage.";
    }
}

// Attaching button's click to bill and tip function
billAndTipButton.addEventListener("click", BillAndTipCalculator);

// Add elements to the page
document.getElementById("id_billAndTip").appendChild(billInput);
document.getElementById("id_billAndTip").appendChild(tipInput);
document.getElementById("id_billAndTip").appendChild(billAndTipButton);
document.getElementById("id_billAndTip").appendChild(billAndTipOutput);