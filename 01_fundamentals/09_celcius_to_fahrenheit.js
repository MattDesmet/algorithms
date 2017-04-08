// Create celsiusToFahrenheit(cDegrees) that accepts the number of degrees Celsius,
// and returns the equivalent temperature expressed in Fahrenheit degrees.
//
// (optional) Do Fahrenheit and Celsius values equate at a certain number? The scientific
// calculation can be complex, so for this challenge just try a series of Celsius integer
// values starting at 200, going downward (descending), checking whether it is equal to
// the corresponding Fahrenheit value.

function celsiusToFahrenheit(cDegrees){
  var Fahrenheit = (cDegrees*1.8)+32
  // console.log(Fahrenheit);
  return Fahrenheit
}

celsiusToFahrenheit(32)

function cVSf(cel) {
  f = 0
  while (cel >= 0) {
    console.log('This is the value of Celcius: ',cel);
    f = celsiusToFahrenheit(cel)
    console.log('This is the value of Fahrenheit: ', f);
    if (f == cel) {
      console.log('They Match!');
    }
    cel--
  }
}

cVSf(30)
