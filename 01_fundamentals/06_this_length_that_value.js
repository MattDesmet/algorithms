// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

num1 = 3
num2 = 7

function returnArray(num1, num2) {
  arraylength = num1;
  arrayinput = num2;
  newArray = []
  for (var i = 0; i < num1; i++) {
    if (num1 == num2) {
      console.log('Jinx');
      break
    }
    newArray.push(num2)
  }
  return newArray
}

results = returnArray(num1, num2)
console.log(results);

results2 = returnArray(2, 4)
console.log(results2);
