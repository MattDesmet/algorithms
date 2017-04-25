// Return the length of the longest word in the provided sentence.
// return should be a number.

// break up string by words and insert into an array
// run a max function on each position and calculate string.length
// return the char length of the longest word.

var sep = ' ';

function findLongestWord(str,sep) {
  let array = str.split(sep)
  let max = 0
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > max){
      max = array[i].length;
    }
  }
  console.log(max);
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog",sep);


// MDN example

// function splitString(stringToSplit, separator) {
//   var arrayOfStrings = stringToSplit.split(separator);
//
//   console.log('The original string is: "' + stringToSplit + '"');
//   console.log('The separator is: "' + separator + '"');
//   console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
// }
//
// var tempestString = 'Oh brave new world that has such people in it.';
// var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
//
// var space = ' ';
// var comma = ',';
//
// splitString(tempestString, space);
// splitString(tempestString);
// splitString(monthString, comma);
