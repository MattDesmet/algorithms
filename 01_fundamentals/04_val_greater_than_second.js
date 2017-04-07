// For [1,3,5,7,9,13], print values that are greater than its 2nd value.
// Return how many values this is.

// Test Set = [1,3,5,7,9,13]
// Expected Outcome = print values '5,7,9,13' & the return count should be (4)

var sampleArray = [1, 3, 5, 7, 9, 13]

function returnCount(arr) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            count++
            console.log(arr[i]);
        }
    }
    console.log(count);
    return count;
}

returnCount(sampleArray);
// var results = returnCount(sampleArray)
// console.log(results);
