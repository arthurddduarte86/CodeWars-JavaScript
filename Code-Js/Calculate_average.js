/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

function findAverage(array) {
    if (array.length ? false: true){return 0;}
    else{
      return array.reduce((a, b) => (a+b))/ array.length;
      }
  }