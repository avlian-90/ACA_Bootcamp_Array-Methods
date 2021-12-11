// Implementation of Array.findIndex() method

const array = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

function myFindIndex(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
  return -1;
}

console.log(myFindIndex(array, (el) => el === "banana"));
console.log(array.findIndex((el) => el === "banana"));
