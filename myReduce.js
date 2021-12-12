// Implementation of Array.reduce() method

const array = [4, 3, 7, 1, 2, 5];

function myReduce(arr, cb, aggr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && aggr === undefined) {
      aggr = arr[i];
    } else {
      aggr = cb(aggr, arr[i]);
    }
  }
  return aggr;
}

console.log(
  myReduce(
    array,
    (acc, el) => {
      return acc + el;
    },
    100
  )
);
console.log(
  array.reduce((acc, el) => {
    return acc + el;
  }, 100)
);
