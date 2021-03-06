// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.

// verify data = if num is negative return empty string.
//

// repeatStringNumTimes("*", 3) //should return "***".
// repeatStringNumTimes("abc", 3) //should return "abcabcabc".
// repeatStringNumTimes("abc", 4) //should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) //should return "abc".
// repeatStringNumTimes("*", 8) //should return "********".
// repeatStringNumTimes("abc", -2) //should return "".


function repeatStringNumTimes(str, num) {
  var targetString = str
  if (num < 0) {
    return "";
  }
  var resultString = targetString.repeat(num);
  console.log(resultString);
  return resultString;
}

repeatStringNumTimes("abc", 3);
