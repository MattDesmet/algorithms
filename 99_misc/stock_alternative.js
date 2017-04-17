var arr = [3,6,10,99,86,87,2,1001,1,6,3,6,9]

function Stock(arr) {
   var delta = 0;
   var min = arr[0];
   var max = arr[0];
   for (day in arr) {
       if (min > arr[day]) {
           min = arr[day]
               // avoid problem of big delta.
           max = arr[day]
       }
       if (max < arr[day]) {
           max = arr[day]
       }
       var newDelta = max - min;
       if (newDelta > delta) {
           delta = newDelta
       }
   }
   console.log(delta);
   return delta
}
console.log(Stock(arr));
