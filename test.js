// bind

Function.prototype.myBind = function (ctx, ...bindargs) {
  return (...callargs) => {
    return this.apply(ctx, bindargs.concat(callargs));
  };
};


//inherit
Function.prototype.myInherit = function (parent) {
  let surr = function () {};
  surr.prototype = parent.prototype;
  this.prototype = new surr;
  this.prototype.constructor = this;
};

//curry
Function.prototype.myCurry = function (method, obj, numArgs) {
  let args = [];

  function _myCurry (arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return method.apply(obj, args);
    } else {
      return _myCurry;
    }
  }
  return _myCurry;
};



function bsearch (array, target) {
  if(array.length === 0) {
    return -1;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];

  if (pivot === target) {
    return pivotIndex;
  } else if (target < pivot) {
    let left = array.slice(0, pivotIndex);
    return bsearch(left, target);
  } else {
    let right = array.slice(pivotIndex + 1);
    let sub = bsearch(right, target);
    return (sub === -1) ? -1 : sub + pivotIndex + 1;
  }
}

const arr = [7,3,4,9,5,4,2,1,0];
//
// console.log(bsearch(arr, 3));
//merge sort
function merge (left, right) {
  let merged = [];

  while(left.length > 0 && right.length > 0) {
    let next = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(next);
  }

  return merged.concat(left, right);
}

Array.prototype.myMergesort = function () {
  if(this.length < 2) {
    return this;
  }

  let middle = Math.floor(this.length / 2);
  let left = this.slice(0, middle).myMergesort();
  let right = this.slice(middle).myMergesort();

  return merge(left, right);
};

// console.log(arr.myMergesort());

//quickSort
Array.prototype.myQuicksort = function (cb = (a,b) => a - b) {
  if( this.length < 2) {
    return this;
  }

  let middle = this[0];
  let left = [];
  let right = [];

  for (var i = 1; i < this.length; i++) {
    (cb(middle, this[i]) > 0) ? left.push(this[i]) : right.push(this[i]);
  }

  return left.myQuicksort(cb).concat(middle, right.myQuicksort(cb));
};

// console.log(arr.myQuicksort());

//bubblesort
Array.prototype.myBubblesort = function () {
   let flag = false;

   while(!flag) {
     flag = true;

     for (var i = 0; i < this.length; i++) {
       if(this[i] > this[i + 1]) {

         let temp = this[i];
         this[i] = this[i+1];
         this[i+1] = temp;
         flag = false;
       }
     }
   }
   return this;

};

// console.log(arr.myBubblesort());
//enumerables
/////each
Array.prototype.myEach = function () {

};

/////myFind
Array.prototype.myFind = function () {

};
/////
////substrings
String.prototype.substrings = function () {
  let substring = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = 1; j + i <= this.length; j++) {
      substring.push(this.slice(i, i +j));

    }
  }
  return substring;
};

// console.log("victor".substrings());


//recursive
/////subsets
function subsets(array) {
  if(array.length === 0) {
    return [[]];
  }

  const first = array[0];
  const subs = subsets(array.slice(1));
  const newSub = subs.map( sub => [first].concat(sub));
  return subs.concat(newSub);
}
let arrr = [1,2,3];
// console.log(subsets(arrr));

/////fibonacci///array and sum
function fib(n) {
  if(n === 0) {
    return [];
  } else if (n===1) {
    return [0];
  } else if (n===2) {
    return [0,1];
  }

  let fibs = fib(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
}
console.log(fib(7));
