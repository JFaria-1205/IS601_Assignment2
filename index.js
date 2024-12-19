/*
        String Reverser
*/
// Input and output variables
let reverseInput = document.createElement("input");
let reverseOutput = document.createElement("p");
let reverseButton = document.createElement("button");
reverseOutput.classList.add("output");

// Button setup
reverseButton.textContent = "REVERSE";

// Placeholder text for input box
reverseInput.placeholder = "Type something...";

// Reverse string function
function ReverseString(){
    let _reverseInputFixed = reverseInput.value.replaceAll(" ", "")
    if (reverseInput.value != null && _reverseInputFixed != "") {
        reverseOutput.classList.add("output");
        reverseOutput.classList.remove("output-error"); 
        reverseOutput.textContent = 'Reversed string: ' + reverseInput.value.split("").reverse().join("");
    } else {
        reverseOutput.classList.add("output-error");
        reverseOutput.classList.remove("output");
        reverseOutput.textContent = "Type something first!";
    }    
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
palindromeButton.textContent = "Palindrome?";

// Placeholder text for input box
palindromeInput.placeholder = "Type some numbers...";

// Palindrome function
function PalindromeOrNot() {
    //if statement checks if palindrome or not
    let _palindromeInputFixed = palindromeInput.value.replaceAll(" ", "")
    if (palindromeInput.value != null && _palindromeInputFixed != "") {
        let _palindromeTextReversed = _palindromeInputFixed.split("").reverse().join("");
        if (_palindromeInputFixed.toLowerCase() === _palindromeTextReversed.toLowerCase()) {    
            palindromeOutput.classList.add("output");
            palindromeOutput.classList.remove("output-error"); 
            
            
            //checks if input is a single letter
            if (_palindromeInputFixed.length === 1){
                palindromeOutput.innerHTML = "\"" + palindromeInput.value + "\"<br> is a palindrome!<br><br>(Any string containing just one letter is by default a palindrome!)";
            } else {
                palindromeOutput.innerHTML = "\"" + palindromeInput.value + "\"<br> is a palindrome!";
            }
        } else {     
            palindromeOutput.classList.add("output-error");
            palindromeOutput.classList.remove("output");      
            palindromeOutput.innerHTML = "\"" + palindromeInput.value + "\"<br> is NOT a palindrome!";
        }
    } else {
        palindromeOutput.classList.add("output-error");
        palindromeOutput.classList.remove("output");
        palindromeOutput.textContent = "Type something first!";
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
let billInput = document.getElementById("id_billInput");
let tipInput = document.getElementById("id_tipInput");
let billAndTipOutput = document.createElement("p");
let billAndTipButton = document.createElement("button");

// Button setup
billAndTipButton.textContent = "Calculate total";

// Placeholder text for input boxes
billInput.placeholder = "Type the bill total...";
tipInput.placeholder = "Type the tip percentage...";

// Palindrome function
function BillAndTipCalculator(){
    // Sanitize input values to only include the numbers
    let _billInputNumbersOnly = billInput.value.replace(/[^0-9.]/g, "");
    let _tipInputNumbersOnly = tipInput.value.replace(/[^0-9.]/g, "");

    if (billInput.value != "" && tipInput.value != ""){
        // Parse the inputs to floats
        let _billAmount = parseFloat(billInput.value);
        let _tipPercent = parseFloat(tipInput.value);

        // Total calculations    
        let _tipAmount = (_billAmount * (_tipPercent/100));
        let _totalAmount = _billAmount + _tipAmount;

        // Fixing decimals
        _totalAmount = _totalAmount.toFixed(2);
        _billAmount = _billAmount.toFixed(2);
        _tipAmount = _tipAmount.toFixed(2);

        // CSS styling
        billAndTipOutput.classList.add("output");
        billAndTipOutput.classList.remove("output-error");

        // Output
        billAndTipOutput.innerHTML = "Total: $" + _totalAmount + "<br>Bill: $" + _billAmount + "<br>Tip Percentage: " + _tipPercent + "%<br>Tip Amount: $" + _tipAmount;
    } else {
        billAndTipOutput.classList.add("output-error");
        billAndTipOutput.classList.remove("output");
        billAndTipOutput.textContent = "Please enter a number for both the bill amount and tip percentage."     
    }
}

// Attaching button's click to bill and tip function
billAndTipButton.addEventListener("click", BillAndTipCalculator);

// Add elements to the page
document.getElementById("id_billAndTip").appendChild(billInput);
document.getElementById("id_billAndTip").appendChild(tipInput);
document.getElementById("id_billAndTip").appendChild(billAndTipButton);
document.getElementById("id_billAndTip").appendChild(billAndTipOutput);


