// given n, return the factorial of provided integer.
// For example: 3! = 1 * 2 * 3 = 6 || 1 * 2 * num = 6

// expected input: n = 3
// expected output: = 6

//

function factorialWithArray(num){
  arr = [];
  sum = arr[0]
  while (num > 0) {
    arr.push(num);
    num--
    console.log(arr);
  }
  for (var i = 1; i < arr.length; i++) {
    sum = arr[i] * (arr[i-1])
  }
  console.log(arr);
  console.log(sum);
  return sum;
}

result = factorialWithArray(5)

// function add(a,b) {
//   return num = a*b
// }
//
// function factorialRecursively(num, fun) {
//   while(num > 0){
//     a = num;
//     b = num-1
//     sum = add(a,b)
//     num--
//   }
// }
//
// num = 5
//
// factorialResult = factorialRecursively(num,add(num,(num-1)))



// console.log(factorialResult);

function factorialize(num) {
  // take in num
  // multiply num * num - 1
  //

  // establish a variable to track 1. multiplier 2. sum
  // multiple num by each number from 1 => value of num
  // increment multiplier
  // add the value of each multiplication to a sum variable
  // return the num = sum.

  let multiplier = 2
  let sum = 0
  sum = sum + num
  console.log('val of sum: ',sum);
  while (multiplier <= num) {
    console.log('counting up');
    console.log('val of multiplier: ',multiplier);
    sum = sum * multiplier
    multiplier++
    console.log('val of multiplier: ',multiplier);
  }
  console.log('val of sum: ',sum)
  return sum;
}

// console.log(factorialize(5))
