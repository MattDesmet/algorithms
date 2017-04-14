// Loop version
// Takes in a number and returns the value of the number at the position 'num' in the fib sequence.

function fibonacci_Loop(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

console.log(fibonacci_Loop(8));

// Recursive version

// function fibonacci_Recursive(num) {
//   if (num=0) {
//     return 0;
//   }
//   if (num=1) {
//     return 1;
//   }
//   console.log(num);
//   return fibonacci(num-2) + fibonacci(num-1)
// }
//
// console.log(fibonacci(34))


// with Memorization

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
