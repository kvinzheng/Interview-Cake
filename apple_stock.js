// Suppose we could access yesterday's stock prices as an array, where:
//
// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.
//
// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
//
// For example:
let stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPricesYesterday);
// // returns 6 (buying for $5 and selling for $11)

function getMaxProfit(array){
  let max = -Infinity;
  for(let i = 0 ; i < array.length - 1; i++){
    let buy = array[i];
    for(let j = i + 1; j < array.length; j++){
      let sell = array[j];
      let difference = sell - buy;
      if(difference > max){
        max = difference;
      }
    }
  }
  return max;
}
//this approach has a run time of O (n ^2)
console.log('best rofit ===', getMaxProfit(stockPricesYesterday));


function getMaxProfit2(array){
  //let assume the first element is the minimum
  let minPrice = array[0];
  let maxProfit = 0;

  for(let i = 0; i < array.length; i++){
    let current = array[i];
    minPrice = Math.min(current, minPrice);

    let potentialProfit = current - minPrice;

    if(potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }
  }
  return maxProfit;
}

console.log('best profit with O(n) solution =', getMaxProfit2(stockPricesYesterday));

// We decided to return a negative profit if the price decreases all day and we can't make any money. We could have thrown an exception instead, but returning the negative profit is cleaner, makes our function less opinionated, and ensures we don't lose information.

let testArr2 = [ 9,6,5,4,2,1];

function getMaxProfit3(array){
  //let assume the first element is the minimum
  let minPrice = array[0];
  //start at the second (index 1) time
  // we can't sell at the first time, since we must buy first,
  let maxProfit = array[1] - array[0];

  for(let i = 1; i < array.length; i++) {
    let current = array[i];
    let potentialProfit = current - minPrice;

    if(potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }

    minPrice = Math.min(current, minPrice);
  }
  return maxProfit;
}
// O(n) time and O(1)O(1) space. We only loop through the array once.

console.log('negative profit', getMaxProfit3(testArr2));
