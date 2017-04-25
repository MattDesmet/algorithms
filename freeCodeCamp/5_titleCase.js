// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// recieve string via function argument.

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  console.log(str);
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
  }
  return str.join(' ');
}
titleCase("I'm a little tea pot");

// Using MAP

function titleCaseMAP(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
titleCaseMAP("I'm a little tea pot");


// Using MAP and REDUCE

function titleCaseREDUCE(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
titleCaseREDUCE("I'm a little tea pot");
