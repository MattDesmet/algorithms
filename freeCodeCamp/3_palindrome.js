// Return true if the given string is a palindrome. Otherwise, return false.

// Input = str = 'eye'
// Expected output = true


// clean up string.  remove all but chars
// set everything to lower case
// conditionals


function palindrome(str) {
    cleanstr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    leftRunner = 0;
    rightRunner = cleanstr.length - 1;
    if (cleanstr === '') {
        return true
    }
    for (let i = 0; leftRunner < cleanstr.length / 2; i++) {
        if (cleanstr[leftRunner] != cleanstr[rightRunner]) {
            return false;
        } else {
            leftRunner++;
            rightRunner--;
        }
    }
    return true;
}

palindrome("0_0 (: /-\ :) 0-0")
// palindrome("_eye")
// palindrome("E-y***e***");
// palindrome("eye");
