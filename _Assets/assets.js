// standard array
var array = [1,3,6,10,99,86,87,1001]

// array with negatives
var array = [1,3,6,-10,99,-86,87,-1001]

var array = [1,2,3,4,5,6,7,8,9,10]

var array = ['string', 'ball', 'bat', 'small', 'red', 'baseball']





function factorial_recursive(n) {
  if (n == 0)
    return 1;
  else
    return factorial_recursive(n-1) * n;
  }
