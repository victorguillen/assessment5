// Write Array.prototype.quicksort

Array.prototype.quicksort = function (cb = (a,b) => a - b) {
  if(this.length < 2) {
    return this;
  }

  let middle = this[0];
  let left = [];
  let right = [];

  for (var i = 1; i < this.length; i++) {
    (cb(middle, this[i]) < 0) ? left.push(this[i]) : right.push(this[i]);
  }

  if(cb(middle) == -1)

  return left.quicksort(cb).concat(middle, right.quicksort(cb));
};




console.log([192,28,43,29,1,2,200,4].quicksort()); // [1,2,4,28,29,43,192,200]

// write bsearch(arr, target)





// console.log(bsearch([1, 2, 3], 1)); // => 0
// console.log(bsearch([2, 3, 4, 5], 3)); // => 1
// console.log(bsearch([2, 4, 6, 8, 10], 6)); // => 2
// console.log(bsearch([1, 3, 4, 5, 9], 5)); // => 3
// console.log(bsearch([1, 2, 3, 4, 5, 6], 6)); // => 5
// console.log(bsearch([1, 2, 3, 4, 5, 6], 0)); // => -1
// console.log(bsearch([1, 2, 3, 4, 5, 7], 6)); // => -1

// write merge sort





// console.log(mergeSort([192,28,43,29,1,2,200,4])); // [1,2,4,28,29,43,192,200]

// write sumNPrimes(n)






// console.log(sumOfNPrimes(0)); // 0
// console.log( sumOfNPrimes(1)); // 2
// console.log(sumOfNPrimes(4)); // 17

// write Array.prototype.bubblesort






// console.log([192,28,43,29,1,2,200,4].bubblesort); // [1,2,4,28,29,43,192,200]

// write subsets(array)









// console.log(subsets([])); // => [[]]
// console.log(subsets([1])); // => [[], [1]]
// console.log(subsets([1, 2])); // => [[], [1], [2], [1, 2]]
// console.log(subsets([1, 2, 3])); // => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
// };

// write Array.prototype.mySlice(start, [end])






//console.log("string".mySlice(1,3); // "tr"

// write Array.prototype.transpose








// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());

// write Function.prototype.inherits







// write Function.prototype.curry







// write myCurry







// write myBind
