// Implementation of Array.slice() method

const array = [1, 2, 3, 4, 5, 6, 7];
function mySlice(arr, start, end) {
  const slicedArr = [];
  let newLength;
  if (start >= 0 && start < arr.length && end === undefined) {
    newLength = arr.length - start;
  } else if (
    start >= 0 &&
    start < arr.length &&
    end < arr.length &&
    end > start
  ) {
    newLength = arr.length - start - (arr.length - end);
  } else if (start < 0 && start > -arr.length && end === undefined) {
    newLength = -1 * start;
    start = arr.length + start;
  } else if (start >= 0 && start < arr.length && end < 0 && -end > start) {
    newLength = arr.length - start + end;
  }
  for (let i = 0; i < newLength; i++) {
    slicedArr[i] = arr[start];
    start++;
  }
  return slicedArr;
}

console.log(mySlice(array, 1, 5));
console.log(array.slice(1, 5));
