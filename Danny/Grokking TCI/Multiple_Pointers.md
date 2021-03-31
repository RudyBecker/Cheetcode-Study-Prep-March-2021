# Multiple Pointers

### Template
Usually for a sorted array. You will have these 2 variables in function scope:
* Left
* Right

Pointing to the indices of the array being iterated over. Sometimes 3 or 4 vars depending on the problem's complexity.

For Two Sum, you start with the indices on opposite ends of the array. Decrement the right index and increment the left index to get closer to the target.

## Two Sum / Pair With Target Sum
Time: O(N) | Space: O(1)
```javascript
const pair_with_targetsum = function (arr, target_sum) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === target_sum) {
      return [left, right];
    } else if (arr[left] + arr[right] > target_sum) {
      right--;
    } else {
      left++;
    }
  }
  return [];
};
```

REVIEW THESE:

## Remove Duplicates
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Time: O(N) | Space: O(1)

```js
function remove_duplicates(arr) {
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;

  let i = 1;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
}
```
Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
```js
function remove_element(arr, key) {
  let nextElement = 0; // index of the next element which is not 'key'
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i];
      nextElement += 1;
    }
  }
  return nextElement;
}
```

## Squaring a Sorted Array
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Naive Solution:
Time: O(N) | Space: O(N)
Will make non-JS devs mad. Start in the middle.
```js
const make_squares = function(arr) {
  const squares = [];
  let negatives = 0;
  let positives = 0;
  while (arr[positives] < 0) {
    negatives++;
    positives++;
  }
  // negatives starts at the last elem < 0
  negatives--;

  while (negatives >= 0 && positives < arr.length) {
    const negSq = arr[negatives] * arr[negatives];
    const posSq = arr[positives] * arr[positives];
    if (negSq < posSq) {
      squares.push(negSq);
      negatives--;
    } else {
      squares.push(posSq)
      positives++;
    }
  }

  if (negatives < 0) {
    while (positives < arr.length) {
      squares.push(arr[positives] * arr[positives])
      positives++;
    }
  } else {
    while (negatives >= 0) {
      squares.push(arr[negatives] * arr[negatives]);
      negatives--;
    }
  }

  return squares;
};
```
Best Solution: Start at the ends and work in.
```js
function make_squares(arr) {
  const n = arr.length;
  squares = Array(n).fill(0);
  let highestSquareIdx = n - 1;
  let left = 0,
    right = n - 1;
  while (left <= right) {
    let leftSquare = arr[left] * arr[left],
      rightSquare = arr[right] * arr[right];
    if (leftSquare > rightSquare) {
      squares[highestSquareIdx] = leftSquare;
      left += 1;
    } else {
      squares[highestSquareIdx] = rightSquare;
      right -= 1;
    }
    highestSquareIdx -= 1;
  }

  return squares;
}
```

## Triplet Sum to Zero
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Solution: Sort the array first. For each iteration of for loop, skip duplicates (same int as previous arr[i]), then run a two sum function on the rest of the array.
Time: O(N^2) | Space: O(T) where T = the number of triplets
```js
function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length-2; i++) { // iterate to third-to-last elem in arr
    if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

function search_pair(arr, targetSum, left, triplets) {
  let right = arr.length-1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
}
```

## Triplets With Smaller Sum
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.
First try: Time: O(N^2) | Space: O(1)

```js
const triplet_with_smaller_sum = function(arr, target) {
  let count = 0;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length-2; i++) {
    count += find_triplets(arr, i+1, target-arr[i])
  }
  return count;
};

// Iteration in this solution feels brute force
const find_triplets = function(arr, left, target) {
  let count = 0;
  let right = arr.length-1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum >= target) {
      right--;
    } else {
      // Any uniterated indices b/w 'left' & 'right' will be valid triplets for 'right' pointer
      count += right-left;
      left++;
      right = arr.length-1;
    }
  }
  return count;
}
```

## Move Zeros To End
This is not in the grokking but I saved my solution from another challenge which used two pointers

Given an array of numbers, return the array with all 0 values moved to the end.

Time: O(N) | Space: O(1)
```js
function zerosToEnd(arr) {
  if (!arr || !arr.length) return [];
  let zerosLeft = arr.reduce((zeros, num) => {
    return num === 0 ? zeros+1 : zeros
  }, 0)

  let currIdx = swapIdx = arr.length-1;
  while (zerosLeft > 0) {
    if (arr[currIdx] === 0) {
      swap(arr, currIdx, swapIdx);
      swapIdx--;
      zerosLeft--;
    }
    currIdx--;
  }

  return arr;
}

function swap(arr, idx1, idx2) {
  temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
```

## Subarrays with a Product Less Than The Target

Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

Time: O(N+S) | Space: O(S) where S is the number of valid subarrays

```js
const find_subarrays = function(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // init running product
    let runningProduct = arr[i]; // 2
    if (runningProduct >= target) continue;
    const subarray = [];
    subarray.push(arr[i]);
    result.push(subarray);
    recurse_subarrays(result, subarray.slice(), runningProduct, target, arr.slice(i+1));
  }

  return result;
};

const recurse_subarrays = function(result, subarray, runningProduct, target, arr) {
  runningProduct *= arr[0];
  if (arr.length && runningProduct < target) {
    subarray.push(arr[0]);
    result.push(subarray);
    recurse_subarrays(result, subarray.slice(), runningProduct, target, arr.slice(1))
  }
}
```
