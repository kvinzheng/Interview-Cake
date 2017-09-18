// computes the number of ways to make the amount of money with coins of the available denominations.
//
// Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output 44—the number of ways to make 44¢ with those denominations:
//
// 1. 1¢, 1¢, 1¢, 1¢
// 2. 1¢, 1¢, 2¢
// 3. 1¢, 3¢
// 4. 2¢, 2¢

function changePossibilitiesTopDown(amountLeft, denominations, currentIndex) {
  if(amountLeft === 0) return 1;

  if(amountLeft < 0 ) {
    return 0;
  }

  let nCombos = 0;

  for(let i = currentIndex; i < denominations.length; i++) {
    nCombos += changePossibilitiesTopDown(amountLeft - denominations[i], denominations, i);
  }
  return nCombos;
}

console.log('changePossibilitiesTopDown=',changePossibilitiesTopDown(4, [1,2],0));
