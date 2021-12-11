// Implementation of Array.filter() method

const array = [1, 5, 8, 6, 3, 2, 10];

function myFilter(arr, cb) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

console.log(myFilter(array, (el) => el % 2 === 0));
console.log(array.filter((el) => el % 2 === 0));
