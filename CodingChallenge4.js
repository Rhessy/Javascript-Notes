/*  
Given an array of forcasted maximum temperatures for the coming week, the thermometer displays a string
with these temperatures. 

Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."\

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.

use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data 1: [17, 21, 23]
Test data 2: [12, 5, -5, 0, 4]



*/

//Difine variables

let temps1 = [17, 21, 23];
let temps2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let len = arr.length;
  let printString = "";

  for (i = 0; i < len; i++) {
    printString += `... ${arr[i]}\u00B0 in ${i + 1} days`;
  }
  console.log(printString);
}

printForecast(temps1);
printForecast(temps2);
