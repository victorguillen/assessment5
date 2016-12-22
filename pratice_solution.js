Array.prototype.quickSort = function(comparator = (a,b) => a - b) {
  if(this.length < 2) {
    return this;
  }
  let left = [], right = [], pivot = this[0];

  for (let i = 1; i < this.length; i++){
    comparator(pivot,this[i]) > 0 ? left.push(this[i]) : right.push(this[i]);
  }

return left.quickSort(comparator).concat(pivot, right.quickSort(comparator));
};



/////////////////////////////////////////////////



function mergeSort(array) {
  if(array.length < 2){
    return array;
  } else {
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right =mergeSort(array.slice(middle));

    return merge(left, right);
  }
}

function merge(left, right) {
    const merged = [];

    while (left.length > 0 && right.length > 0){
      let nextItem = (left[0] < right[0]) ? left.slice() : right.slice();
      merged.push(nextItem);
    }

    return merged.concat(left, right);

}


////////////////////////////////////////////

Array.prototype.bubbleSort = function () {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < (this.length - 1); i++) {
      if (this[i] > this[i + 1]) {
        let tmp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = tmp;

        isSorted = false;
      }
    }
  }

  return this;
};

// // console.log([5, 3, 4, 2, 1].bubbleSort());
//
// ////////////////////////////////////////////

function bsearch(arr, target) {
  if(arr.length === 0){
    return -1;
  }

  const probeIdx = Math.floor(arr.length /2);
  const probe = arr[probeIdx];

  if(probe === target){
    return probeIdx;
  } else if(target < probe){
    let left = arr.slice(0,probeIdx);
    return bsearch(left, target);
  }else {
    let right = arr.slice(probeIdx + 1);
    let subprob = bsearch(right, target);

    return subprob === -1 ? -1 : subprob + (probeIdx + 1);
  }
}

////////////////////////////////////////////////////


Function.prototype.inherits = function(Parent){
  const Surrogate = function(){};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


/////////////////////////////////////////////////


Function.prototype.curry = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  }
  return _curriedFn;
};

////////////////////////////////////////////////

function myCurry(fn,object,numArgs) {
 let args = [];
 function _myCurry(arg) {
   args.push(arg);
   if (args.length === numArgs) {
     return fn.apply(object, args);
   }
   else {
     return _myCurry;
   }
 }
 return _myCurry;
}



//////////////////////////////////////////



Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};


//////////////////////////////////////////




Array.prototype.transpose = function () {
  const columns = [];
  for (let i = 0; i < this[0].length; i++) {
    columns.push([]);
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j].push(this[i][j]);
    }
  }

  return columns;
};

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());

////////////////////////////////////////////



Array.prototype.myReduce = function(callback){
    let accum = this[0];
    let arr = this.slice(1);

    arr.forEach(el =>{
      accum = callback(accum, el);
    });

    return accum;

};


////////////////////////////////////////////



String.prototype.mySlice = function(start, end){
  if(end === undefined || end > this.length){
     end = this.length;
  }
  let newStr = "";
  for (var i = start; i < end; i++) {
    newStr += this[i];
  }

  return newStr;
};


///////////////////////////////////////////////


function subsets(array) {
  if(array.length === 0) {
    return [[]];
  }

  const firstElement = array[0];
  const subSubsets = subsets(array.slice(1));
  const newSubsets = subSubsets.map(subSubset => [firstElement].concat(subSubset));
  return subSubsets.concat(newSubsets);

}


////////////////////////////////////////////////

Array.prototype.transpose = function () {
  const columns = [];
  for (let i = 0; i < this[0].length; i++) {
    columns.push([]);
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j].push(this[i][j]);
    }
  }

  return columns;
};
