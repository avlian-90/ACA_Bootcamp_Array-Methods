// Implementation of Array.every() method

const array = [3, 5, 7, 9, 3, 1];
function myEvery(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return true;
    }
    return false;
  }
}

console.log(myEvery(array, (el) => el < 10));
console.log(array.every((el) => el < 10));
