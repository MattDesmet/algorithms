// if 2 given numbers represent your birthday month and day, in either order, log 'how did you know' ELSE log 'just another day'

var bdayMonth = 9
var bdayDay = 19

function bdayCheck(param1, param2) {
  if (param1  == bdayMonth && param2 == bdayDay){
    console.log('How did you know?');
  }
  else if (param2  == bdayMonth && param1 == bdayDay) {
    console.log('How did you know?');
  }
  else{
    console.log('Just another day');
  }
}


bdayCheck(9,19); // should return 'how did you know'
bdayCheck(19,9); // should return 'how did you know'
bdayCheck(9,20); // should return 'just another day'
bdayCheck(1,1); // should return 'just another day'
