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
palindromeButton.textContent = "Palindrome?";

// Placeholder text for input box
palindromeInput.placeholder = "Type some numbers...";

// Palindrome function
function PalindromeOrNot() {
    //if statement checks if palindrome or not
    let _palindromeInputFixed = palindromeInput.value.replaceAll(" ", "")
    if (_palindromeInputFixed === _palindromeInputFixed.split("").reverse().join("")) {    
        palindromeOutput.classList.add("output");
        palindromeOutput.classList.remove("output-error"); 
        palindromeOutput.textContent = palindromeInput.value + "\n is a palindrome!";            
    } else {     
        palindromeOutput.classList.add("output-error");
        palindromeOutput.classList.remove("output");      
        palindromeOutput.textContent = "This is NOT a palindrome.";
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
billAndTipButton.textContent = "Calculate total";

// Placeholder text for input boxes
billInput.placeholder = "Type the bill total...";
tipInput.placeholder = "Type the tip percentage...";

// Palindrome function
function BillAndTipCalculator(){
    if (billInput.value != "" && tipInput.value != ""){
        
        // Sanitize input values to only include the numbers
        let _billInputNumbersOnly = billInput.value.replace(/[^0-9.]/g, "");
        let _tipInputNumbersOnly = tipInput.value.replace(/[^0-9.]/g, "");

        // Parse the inputs to floats
        let _billAmount = parseFloat(_billInputNumbersOnly);
        let _tipAmount = parseFloat(_tipInputNumbersOnly);

        // Total calculations        
        let _totalAmount = _billAmount + ((_tipAmount/100)*_billAmount);

        // CSS styling
        billAndTipOutput.classList.add("output");
        billAndTipOutput.classList.remove("output-error");

        // Output
        billAndTipOutput.textContent = "With a total of $" + _billAmount + " and a " + _tipAmount + "% tip, the total is: $" + _totalAmount;
    } else {
        billAndTipOutput.classList.add("output-error");
        billAndTipOutput.classList.remove("output");
        billAndTipOutput.textContent = "Please enter a value for both the bill amount and tip percentage."        
    }
}

// Attaching button's click to bill and tip function
billAndTipButton.addEventListener("click", BillAndTipCalculator);

// Add elements to the page
document.getElementById("id_billAndTip").appendChild(billInput);
document.getElementById("id_billAndTip").appendChild(tipInput);
document.getElementById("id_billAndTip").appendChild(billAndTipButton);
document.getElementById("id_billAndTip").appendChild(billAndTipOutput);


