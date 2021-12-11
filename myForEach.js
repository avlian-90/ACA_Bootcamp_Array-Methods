// Implementation of Array.forEach() method

const array = [1, 2, 3, 4, 5];

function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

console.log(
  myForEach(array, (el, i) => {
    console.log(`${i}: ${el}`);
  })
);

console.log(array.forEach((el, i) => console.log(`${i}: ${el}`)));
