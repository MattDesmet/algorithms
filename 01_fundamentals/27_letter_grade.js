//  Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given
// an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a
// ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’.
//
// Example: given 88, you should log "Score:88. Grade: B". Given the score 61, log the string "Score: 61.
// Grade: D".

// take in a given number
// send it thru a series of if statements
// return grade that matches the proper if statement match
// call function once with a test case for each of the potential letter grades.


function letterGrade(score) {
  var letter_grade = ''
  if (score >= 90){ letter_grade = 'A'}
  if (score >= 80 && score <90){ letter_grade = 'B'}
  if (score >= 70 && score <80){ letter_grade = 'C'}
  if (score >= 60 && score <70){ letter_grade = 'D'}
  if (score <60){ letter_grade = 'F'}
  console.log('The students score is: ',score, ' which is the letter grade of: ',letter_grade);
}

letterGrade(90)
letterGrade(80)
letterGrade(70)
letterGrade(60)
letterGrade(50)
console.log("**************************************************");

function letterGrade_functionTester(letterGrade) {
  for (var i = 0; i <= 100; i++) {
    var score = i;
    letterGrade(i)
  }
  // console.log(letterGrade);
}

letterGrade_functionTester(letterGrade)
