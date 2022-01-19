// pull the user entered from the page 
function getValues() {
    let userString = document.getElementById("checkPalindrome").value;

    //Call reverse a String
    let isPalindrome = checkPalindrome2(userString);

    //Display the reverse String 
    displayData(isPalindrome, userString);


}

//this is our generate data

function checkPalindrome2(userString) {
    userString = userString.toLowerCase();
    let regex = /[a-z0-9]/gi;
    userString = userString.replace(regex, "")
    let revString = "";
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];

    }
    if (revString == userString) {
        return true;
    }
    return false;
}



//Display out Reversed String to the Page 


function displayData(isPalindrome, userString) {
    if (isPalindrome == true) {

        document.getElementById("alert").classList.remove("alert-danger");
        document.getElementById("alert").classList.remove("alert-success");

        
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("msg").innerHTML = `It is a Palindrome!; ${userString}`;
        document.getElementById("alertheading").innerHTML = `You Did It!`;
    } else {
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("msg").innerHTML = `It is not a Palindrome...: ${userString}`;
        document.getElementById("alertheading").innerHTML = `Sorry!`;
    }


    
    document.getElementById("alert").classList.remove('invisible');
    document.getElementById("alert").classList.remove('d-none');
}