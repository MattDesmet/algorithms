// create dice game that rolls a 20 sided dice.  Dice rolls until there are (2) equal values rolled.
// keeps track of min, max, and avg value of all roles.
// once ended, the above is display along with the values of all #'s rolled
// assets needed: var min, max, avg,


function randomRoll(num) {
  desired_rolls = num
  times_rolled = 0
  roll_values = []
  // while(roll != last){
  while(times_rolled <= desired_rolls){
    // roll = Math.floor(Math.random()*(20+1)) + 1; // this returned a 21 value.  Not inclusive.
    roll = Math.floor(Math.random()*(20+1));
    roll_values.push(roll)
    times_rolled++
  }
  console.log(roll_values);
}

randomRoll(20)




function randomDice(num) {
  desired_rolls = num
  times_rolled = 0
  roll_values = []
  // while(roll != last){
  while(times_rolled <= desired_rolls){
    // roll = Math.floor(Math.random()*(20+1)) + 1; // this returned a 21 value.  Not inclusive.
    roll = Math.floor(Math.random()*(20+1));
    roll_values.push(roll)
    times_rolled++
  }
  console.log(roll_values);
}

randomDice(20)
