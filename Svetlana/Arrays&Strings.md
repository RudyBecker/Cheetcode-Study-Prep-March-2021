# Problem 1 - Two Sum (optimized with hash map)

Time: O(n);
Space: O(n);

```js
var twoSum = function (nums, target) {
  let result = [];
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let difference = target - currentNum;
    if (difference in map) {
      result.push(i, map[difference]);
    } else {
      map[currentNum] = i;
    }
  }
  return result;
};
```

# Problem 1 - Two Sum (for a sorted array)

Time: O(n);
Space: O(1);

```js
var twoSum = function (sortedNums, target) {
  let result = [];
  let left = 0;
  let right = sortedNums.length - 1;
  let sum = sortedNums[left] + sortedNums[right];
  while (left < right) {
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      result.push(left, right);
    }
  }
  return result;
};
```

# Problem 1 - Two Sum (DS design)

Design and implement a TwoSum class. It should support the following operations: add and find.

add(input) – Add the number input to an internal data structure.

find(value) – Find if there exists any pair of numbers which sum is equal to the value.

For example,
add(1); add(3); add(5); find(4) => true; find(7) => false

```js
class TwoSum {
  constructor(numbers = []) {
    this.numbers = numbers;
  }
  add(num) {
    //O(1) space b/c in JS arrays are dynamic

    return this.numbers.push(num);
  }
  find(target) {
    //O(n) space with hash map
    //O(n) time - for loop

    let map = {};
    for (let i = 0; i < this.numbers.length; i++) {
      let currentNum = this.numbers[i];
      let difference = target - currentNum;
      if (difference in map) {
        return true;
      } else {
        map[currentNum] = i;
      }
    }
    return false;
  }
}
```

# Problem 2 - Container With Most Water

Time: O(n);
Space: O(1);

```js
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const lowerWall = Math.min(height[left], height[right]);
    const length = right - left;
    const area = length * lowerWall;
    maxArea = Math.max(area, maxArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
```

# Problem 3 - Trap rain water

Time: O(n);
Space: O(1);

```js
var trap = function (height) {
  let totalWater = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  while (leftPointer < rightPointer) {
    if (height[leftPointer] < height[rightPointer]) {
      if (height[leftPointer] >= maxLeft) {
        maxLeft = height[leftPointer];
      } else {
        totalWater += maxLeft - height[leftPointer];
      }
      leftPointer++;
    } else {
      if (height[rightPointer] >= maxRight) {
        maxRight = height[rightPointer];
      } else {
        totalWater += maxRight - height[rightPointer];
      }
      rightPointer--;
    }
  }
  return totalWater;
};
```

# Problem 4 - Backspace string compare

Time: O(n + m);
Space: O(1);

```js
var backspaceCompare = function (S, T) {
  let sPointer = S.length - 1;
  let tPointer = T.length - 1;
  let sCharsToDelete = 0;
  let tCharsToDelete = 0;
  while (sPointer >= 0 || tPointer >= 0) {
    if (S[sPointer] === "#") {
      sCharsToDelete += 2;
      while (sCharsToDelete > 0) {
        sCharsToDelete--;
        sPointer--;
        if (S[sPointer] === "#") {
          sCharsToDelete += 2;
        }
      }
    }
    if (T[tPointer] === "#") {
      tCharsToDelete += 2;
      while (tCharsToDelete > 0) {
        tCharsToDelete--;
        tPointer--;
        if (T[tPointer] === "#") {
          tCharsToDelete += 2;
        }
      }
    }
    if (S[sPointer] !== T[tPointer]) {
      return false;
    } else {
      sPointer--;
      tPointer--;
    }
  }
  return true;
};
```

# Problem 5 - Longest substring without repeating characters

Time: O(n);
Space: O(1);

## Solution 1

```js
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  let left = 0;
  let right = 0;
  let longest = 0;
  let seen = {};
  while (right < s.length) {
    let leftChar = s[left];
    let rightChar = s[right];
    if (!(rightChar in seen) || seen[rightChar] < left) {
      seen[rightChar] = right;
      let currentLength = right - left + 1;
      longest = Math.max(currentLength, longest);
      right++;
    } else {
      left = seen[rightChar] + 1;
      seen[rightChar] = right;
      right++;
    }
  }
  return longest;
};
```

## Solution 2

```js
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let seen = {};
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let currentLetter = s[right];
    if (currentLetter in seen && seen[currentLetter] >= left) {
      left = seen[currentLetter] + 1;
    }
    seen[currentLetter] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
```

# Problem 6a - Valid Palindrome

ADD HERE - REGEX

# Problem 6b - Almost Palindrome

Time: O(n);
Space: O(1);

```js
var validPalindrome = function (s) {
  const isValidSubPalindrome = (s, left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isValidSubPalindrome(s, left + 1, right) ||
        isValidSubPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};
```

# Problem 7 - Implement strStr (indexOf in JS)

Time: O(n); Space: O(n);

```js
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }
  if (haystack.length === needle.length && haystack === needle) {
    return 0;
  }
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let currentChar = haystack[i];
    if (currentChar === needle[0]) {
      let subStr = haystack.slice(i, i + needle.length);
      if (subStr === needle) {
        return i;
      }
    }
  }
  return -1;
};
```

# Problem 8 - Reverse Words in a String

Time: O(N); Space = (O(N))

Given an input string s, reverse the string word by word.
For example, given s = "the sky is blue", return "blue is sky the".
example 1: "the sky is blue"
example 2: " the sky is blue "
example 3: " "

```Javascript
const reverseWords = (str) => {
  let words = str.split(' ');
  let newStr = [];
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== '') {
      newStr.push(words[i]);
    }
  }
  return newStr.join(' ');
};
```

# Problem 9 - String to Integer (atoi)

Implement atoi to convert a string to an integer.

```Javascript
const atoi = (str) => {
  const trimmed = str.trim();
  let place = 1;
  let num = 0;
  let isNeg = false;
  for (let i = trimmed.length - 1; i >= 0; i--) {
    if (trimmed[i] === '-') {
      isNeg = true;
    } else if (trimmed[i] !== ' ') {
      num += trimmed[i] * place;
      place *= 10;
    }
  }
  return isNeg ? num * -1 : num;
};
```
