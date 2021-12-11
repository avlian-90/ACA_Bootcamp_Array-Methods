// Implementation of Array.map() method

const array = [1, 2, 3, 4, 5];

function myMap(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

console.log(myMap(array, (el) => el * 3));
console.log(array.map((el) => el * 3));
