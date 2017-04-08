// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that
// accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees.
//
// For review, Fahrenheit = (9/5 * Celsius) + 32.

var fDegrees = 90

function fahrenheitToCelsius(fDegrees) {
  var Celsius = ((fDegrees - 32)/1.8)
  // console.log('The temperature in Celsius is; ',Celsius);
  console.log('Fahrenheit: ',fDegrees, 'is equal to Celsius: ',Celsius);
}

fahrenheitToCelsius(fDegrees)
console.log("**************************************************");
fahrenheitToCelsius(200)
