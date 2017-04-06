// write a function that determines whether a given year is a leap year.
// if a year is divisible by 4, it is a leap year unless its divisible by 100
// however if it is divisible by 400, then it is

function findLeapYear(year) {
  if ((year % 4 == 0 && year % 100 !=0) || year % 400 == 0) {
    console.log('This is a leap year!');
  }else {
    console.log('this is NOT a leap year');
  }
}

findLeapYear(2012); // should return true.
findLeapYear(800); // should return true.
findLeapYear(8); // should return true.
findLeapYear(200); // should return false.
findLeapYear(11); // should return false.
findLeapYear(300); // should return false.
