// Implementation of Array.some() method

const array = [1, 2, 3, 4, 5, 6, 7];

function mySome(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return true;
    }
  }
  return false;
}

console.log(mySome(array, (el) => el === 3));
console.log(array.some((el) => el === 3));
