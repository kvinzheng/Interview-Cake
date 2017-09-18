// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
//
// For example, given:
//
//   [1, 7, 3, 4]
// your function would return:
//
//   [84, 12, 28, 21]

// We'll calculate productsOfAllIntsBeforeIndex as:
//
// If the input array is [2, 4, 10], the product of all the numbers before each index is [1, 2, 8]
// And we'll calculate productsOfAllIntsAfterIndex as:
//
// If the input array is [2, 4, 10], the product of all the numbers after each index is [40, 10, 1]
// If we take these arrays and multiply the integers at the same indices, we get:
//
// The product of all the numbers before an index times the product of all the numbers after an index is the product of the numbers at all other indices: 1*40=40, 2*10=20, 8*1=8.
//

let testArr = [1, 7, 3, 4];

function getProductsOfAllIntsExceptAtIndex(intArray) {

    if (intArray.length < 2) {
        throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
    }
    let productExceptThatIndex = [];
    let product = 1;
    for(let i = 0 ; i < intArray.length; i++) {
      productExceptThatIndex[i] = product;
      product *= intArray[i];
    }
    product = 1;
    for(let j = intArray.length - 1; j >= 0; j--){
      productExceptThatIndex[j] *= product;
      product *= intArray[j];
    }

    return productExceptThatIndex;
}

console.log('productArr = ', getProductsOfAllIntsExceptAtIndex(testArr));

//time complexity is O(n) and O(n) space complexity
