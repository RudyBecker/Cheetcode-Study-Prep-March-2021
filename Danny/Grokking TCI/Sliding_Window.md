# Sliding Window

### Template
You will usually have 4 variables in the function scope:
* left
* right
* running sum (or other value pointing to the elems in the window)
* return value i.e. greatest sum (or other -- that meets the condition)
Left and Right pointers will iterate, usually from left to right along the array.
As they iterate, we can update running sum in Constant Time, and compare each update to the return value

## Maximum Sum Subarray of Size K
Time: O(N) | Space: O(1)
```js
const max_sub_array_of_size_k = function(k, arr) {
  let greatestRunningSum = -Infinity;
  let currentSum = 0;
  let left = 0;
  let right = k-1;
  // calculate current sum
  let i = left;
  while (i <= right) {
    currentSum += arr[i];
    i++;
  }
  while (right < arr.length-1) {
    greatestRunningSum = Math.max(currentSum, greatestRunningSum)
    left++;
    right++;
    currentSum = currentSum - arr[left-1] + arr[right];
  }

  return Math.max(currentSum, greatestRunningSum);
};
```

## Smallest Subarray with a Given Sum
Time: O(N)
Space: O(1)
```js
function subArray(array,s){
  let left = 0
  let right = 0
  let smallestSize = Infinity
  let sum = array[0]
  while (right <= array.length-1 && left <= right){
      if (sum >= s){
        let currSize = right - left+1
        smallestSize = Math.min(smallestSize,currSize)
        sum -= array[left]
        left++
      } else {
        right++
        sum += array[right]
      }
  }
  return smallestSize
}
```

## Longest Substring with K Distinct Characters
Time: O(N)
Space: O(K) where K is the number of chars we're tracking
```js
const longest_substring_with_k_distinct = function(str, k) {
  let longestSubstr = 0;
  let left = 0;
  let right = 0;
  const hashMap = {
    [str[0]]: 1
  };
  while (right < str.length && left <= right) {
    // valid substr
    if (Object.keys(hashMap).length <= k) {
      longestSubstr = Math.max(longestSubstr, right-left+1);
      right++;
      hashMap[str[right]] = (hashMap[str[right]] || 0) + 1;
    } // invalid substr
    else {
      hashMap[str[left]]--;
      if (hashMap[str[left]] === 0) delete hashMap[str[left]];
      left++;
    }
  }

  return longestSubstr;
};
```

## Fruit Into Baskets
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

Same as previous problem with K=2, and therefore requiring constant space.

Time: O(N) | Space: O(1)
```js
const fruits_into_baskets = function(fruits) {
  if (fruits.length < 1) return -1;
  let maxFruits = 1;
  let left = 0;
  let right = 0;
  const fruitOccurrences = { [fruits[right]]: 1 };

  while (right < fruits.length && left <= right) {
    // how many fruits are in the basket?
    const numFruits = Object.keys(fruitOccurrences).length;
    if (numFruits > 2) {
      const fruitToDecr = fruits[left]
      fruitOccurrences[fruitToDecr]--;
      if (fruitOccurrences[fruitToDecr] === 0) delete fruitOccurrences[fruitToDecr];
      left++;
      // valid: evaluate max Fruits
    } else {
      const currentFruits = right - left + 1;
      maxFruits = Math.max(maxFruits, currentFruits)
      right++;
      const nextFruit = fruits[right];
      fruitOccurrences[nextFruit] = (fruitOccurrences[nextFruit] || 0) + 1;
    }

  }
  return maxFruits;
};
```
