// print integers 1 to 100.  If divisible by 5, print 'coding' instead.  if divisible by 10, also print 'dojo'

for (var i = 1; i < 101; i++) {
  if (i % 5 ==0 && i % 10 == 0) {
    console.log('coding dojo');
  }
  else if (i % 5 == 0) {
    console.log('coding');
  }
  else {
    console.log(i);
  }
}
