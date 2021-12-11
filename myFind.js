// Implementation of Array.find() method

const array = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

function myFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(myFind(array, (el) => el.length > 10));
console.log(array.find((el) => el.length > 10));
