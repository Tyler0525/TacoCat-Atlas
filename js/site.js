// pull the user entered from the page 
function getValues() {
    let userString = document.getElementById("checkPalindrome").value;

    //Call reverse a String
    let returnObj = checkPalindrome2(userString);

    //Display the reverse String 
    displayData(returnObj);


}

//this is our generate data

function checkPalindrome2(userString) {
    userString = userString.toLowerCase();
    isPalindrome = false;
    let returnObj = {};


    let regex = /[a-z0-9]/gi;
    userString = userString.replace(regex, "")
    let revString = "";
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];

    }

    if (revString == userString) {
        isPalindrome = false;
    } else {
        isPalindrome = true;
    }
    returnObj["IsPalindrome"] = isPalindrome;
    returnObj["revString"] = revString;

    return returnObj;
}



//Display out Reversed String to the Page 


function displayData(returnObj) {


    document.getElementById("alert").classList.remove("alert-danger");
    document.getElementById("alert").classList.remove("alert-success");

    if (returnObj[IsPalindrome] == true) {
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("msg").innerHTML = `It is a Palindrome!; ${userString}`;
        document.getElementById("alertheading").innerHTML = `You Did It!<br> Your reversed string is:${returnObj["revString"]}`;
    } else {
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("msg").innerHTML = `It is not a Palindrome...: ${userString}`;
        document.getElementById("alertheading").innerHTML = `Sorry! <br> Your reversed string is:${returnObj["revString"]}`;
    }



    document.getElementById("alert").classList.remove('invisible');
    document.getElementById("alert").classList.remove('d-none');
}