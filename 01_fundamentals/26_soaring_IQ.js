// Your time with us will definitely make you smarter! Let’s say a new Dojo student, Bogdan, entered
// with a modest IQ of 101. How smart would Bogdan be at the end of the bootcamp, if his IQ rose by .01
// on the first day, then went up by an additional .02 on the second day, up by .03 more on the third day,
// etc…. all the way until increasing by .98 on his 98th day (the end of 14 full weeks)?
//

// create variables: student_IQ, IQ_incrementer, days_in_class and num for day counter
// use while loop while days are less than num
// add value of previous days IQ and .01

var student_IQ = 101
var incrementer_IQ = .01
var days_in_class = 1

function IQ_Calculator(student_IQ) {
  while(days_in_class < 98){
    incrementer_IQ = incrementer_IQ + .01;
    student_IQ = student_IQ + incrementer_IQ;
    days_in_class++
    Math.round(incrementer_IQ, 1)
    Math.round(student_IQ,1)
    console.log('Value of days in Class: ', days_in_class);
    console.log('This is the value of incrementer_IQ:', incrementer_IQ );
    console.log('This is the value of student_IQ:', student_IQ);
    // console.log(student_IQ);
  }
}

IQ_Calculator(101)
