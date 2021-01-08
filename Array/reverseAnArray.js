let array = [1, 2, 3, 4, 5, 6];
let stringArray = "Hello";

// Reverse an array

let reverseArray = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start += 1;
    end -= 1;
  }
};

let printArray = (arr) => {
  console.log(arr);
};

(function () {
  printArray(array);
  reverseArray(array, 0, array.length - 1);
  printArray(array);
})();
