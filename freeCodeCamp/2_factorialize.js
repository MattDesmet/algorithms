// given n, return the factorial of provided integer.
// For example: 3! = 1 * 2 * 3 = 6 || 1 * 2 * num = 6

// expected input: n = 3
// expected output: = 6

//

function factorialWithArray(num){
  if (num === 0){
    return 1;
  } else {
    var sum = 1;
    for (var i = 1; i <= num; i++) {
      sum = sum * i;
    }
    console.log(sum);
    return sum;
  }
}

result = factorialWithArray(5)
