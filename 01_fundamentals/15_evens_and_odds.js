// Create a function that accepts an array. Every time that array has three odd values in a row,
// print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

// check index position.
// if odd increment ODD counter
// set Even counter to 0
// if odd counter == 3 then print 'That's Odd'
// reset ODD counter to 0

// do similar for EVENs

var array = [1, 1, 1, 2, 4, 3, 3, 3, 8, 8, 8]

function checkTriples(array) {
    var oddCount = 0
    var evenCount = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            oddCount++
            evenCount = 0
            if (oddCount == 3) {
                console.log('That is Odd');
                oddCount = 0;
            }
        }
        if (array[i] % 2 == 0) {
            evenCount++
            oddCount = 0
            if (evenCount == 3) {
                console.log('Even More So!');
                evenCount = 0;
            }
        }
    }
}

checkTriples(array)
