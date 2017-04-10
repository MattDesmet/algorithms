// Create a function that accepts an array, and prints "yummy" each time one of the values is equal
// to "food". If no array elements are "food", then print "I'm hungry" once.

// create var 'keywordCount'
// iterate thru array
// check if value is equal to target word: 'food'
// if its equal, print 'yummy'
// increment counter keywordCount
// if not continue to next index
// if counter is = 0 print 'im hungry' once.

var array = ['string', 'food', 'bat', 'food', 'food', 'baseball'] // result 'yummy' 3 times.
var array2 = ['string', 'ball', 'bat', 'ball', 'red', 'baseball'] // result im hungry

function isFood(array) {
  var keywordCount = 0
  for (var i = 0; i < array.length; i++){
    if (array[i] == 'food' ){
      console.log('yummy');
      keywordCount++
    }
  }
  if (keywordCount == 0) {
    console.log("I'm Hungry");
  }
}
isFood(array)
isFood(array2)
