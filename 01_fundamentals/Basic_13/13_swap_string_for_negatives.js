// given an array of numbers, replace any negative values with the string 'Dojo'

// TEST CASE:  [1,3,6,-10,99,-86,87,-1001] = [1,3,6,Dojo,99,Dojo,87,Dojo]

var array = [1,3,6,-10,99,-86,87,-1001]

for (var i = 0; i < array.length; i++) {
  if(array[i] <0){
    array[i] = 'Dojo'
  }
}
console.log(array);
