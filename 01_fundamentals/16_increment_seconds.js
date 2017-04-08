// Given an array of numbers arr, add 1 to every second element, specifically those whose
// index is odd (arr[1], [3], [5], etc). Afterward, console.log each array value and return arr.

// iterate thru array.
// at each odd index position = add (1) to the value.
// OUTPUT = console log each of the array values.
// return the array.

// var array = [1,2,3,4,5,6,7,8,9,10]
var array = [1,2,3,4,5,6,7,8,9,10,11]
// var array = [1, 2, 3, 4] // EVEN length array
// var array = [1, 2, 3, 4, 5] // ODD length array


function incrementOdds(array) {
    if (array.length % 2 == 0) {
        for (var i = 1; i < array.length; i += 2) {
            array[i] = array[i] + 1;
        }
    } else {
        for (var i = 1; i < array.length - 1; i += 2) {
            array[i] = array[i] + 1;
        }
    }
    for (var i = 0; i < array.length; i++) {
        console.log(array[i])
    }
    return array;
}

// incrementOdds(array)

// console.log("**************************************************");

var result = incrementOdds(array);
console.log(result);
