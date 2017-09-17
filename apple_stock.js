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
