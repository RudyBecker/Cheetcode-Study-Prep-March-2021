# Binary Search

### Template
Use on sorted arrays. O(log(N)) Time operation involves cutting a sorted array/set in half every iteration, getting closer to the target element. Three vars point to the indices of the array: start/left, end/right (both in function scope), and middle.

MEMORIZE THIS:
```js
let middle = Math.floor(start + (end - start) / 2);
```

```javascript
const binarySearch = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);
    if (arr[middle] === key) {
      return middle;
    } else if (key < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
};
```

## Order Agnostic Binary Search
```js
const binary_search = function(arr, key) {
  let start = 0;
  let end = arr.length-1;
  let isAcc = arr[start] < arr[end];
  while (start <= end){
    let middle = Math.floor(start + (end - start) / 2);
    if(arr[middle] === key){
        return middle;
    }
    else if (isAcc) {
        if(key < arr[middle]){
          end = middle-1;
        } else {
          start = middle+1;
        }
    }
    else {
      if(key < arr[ middle]){
        start = middle+1;
      } else {
        end = middle-1;
      }
    }
  }
  return -1;
};
```
