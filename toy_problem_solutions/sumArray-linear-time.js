/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([4, -1, 5]); // => 8
 * example 3: sumArray([10, -11, 11]); // 11
 */

var sumArray = function(array){
  if(array.length === 0){
    return null;
  }
  var greatest = 0;
  var tally = 0;

  //exceptional case for an array with only zero or negative numbers,
  //because the greatest sum would be negative
  var alwaysNegative = true;

  for(var i = 0; i < array.length; i++){

    //if tally gets smaller than zero, the 'current tally' cannot conceivably be part of
    //the greatest contiguous sum as its net effect is negative, so it is reset
    //to zero and starts to keep track of the sum for a 'new tally'
    if(tally < 0){
      tally = 0;
    }

    //whenever tally gets positive, there is at least one positive number in the array
    if(tally > 0){
      alwaysNegative = false;
    }

    //add current sum to tally
    tally += array[i];

    //store the highest point the tally reachs to 'highest'
    if(tally > highest){
      greatest = tally;
    }
  }

  //if all the the numbers in the array is zero or negative, the greatest 
  //contiguous sum is the single largest number in the array
  if(alwaysNegative){
    return Math.max.apply(this, array);
  }
  
  return highest;
};
