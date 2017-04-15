// create dice game that rolls a 20 sided dice.  Dice rolls until there are (2) equal values rolled.
// keeps track of min, max, and avg value of all roles.
// once ended, the above is display along with the values of all #'s rolled
// assets needed: var min, max, avg,

function randomDice() {
  min = 20
  max = 1
  sum = 0
  times_rolled = 0
  roll_array = []
  roll = Math.floor(Math.random()*(20+1));
  first_roll =
  previous_roll = 0
  while(roll != previous_roll){
    console.log('INSIDE WHILE: Value of Previous Roll: ', previous_roll);
    console.log('INSIDE WHILE: Value of Roll: ', roll);
    if (roll < min) {
      min = roll
    }
    if (roll < max) {
      max = roll
    }
    sum = sum + roll
    roll_array.push(roll)
    times_rolled++
    previous_roll = roll_array[roll_array.length-1]
    roll = Math.floor(Math.random()*(20+1));
  }
  roll_array.push(roll)
  console.log(roll_array);
  console.log('Length of final Array: ',roll_array.length);
  console.log('OUTSIDE WHILE: Value of Previous Roll: ', previous_roll);
  console.log('OUTSIDE WHILE: Value of Roll: ', roll);
}

randomDice()
