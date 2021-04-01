##Question #1 Google Interview Question Two Sum (Easy)

```Javascript
var twoSum = function (nums, target) {
  let memo = {};
  for (let i = 0; i < nums.length; i++) {
    let val = target - nums[i];
    if (nums[i] in memo) {
      return [i, nums[i]];
    } else {
      memo[val] = i;
    }
  }
};

//Time: O(n) Space: O(1)
//Linear Time Complexity & constant space
```

## Question #2 Container With Most Water (Medium)

```Javascript
var maxArea = function (height) {
  let maxArea = 0;
  let pointer1 = 0;
  let pointer2 = height.length - 1;
  while (pointer2 > pointer1) {
    let length = Math.min(height[pointer1], height[pointer2]);
    let width = pointer2 - pointer1;
    let area = length * width;
    maxArea = Math.max(maxArea, area);
    //checking to see which value is greater and shifts the pointers based on condition
    if (height[pointer1] <= height[pointer2]) {
      pointer1++;
    } else {
      pointer2--;
    }
  }
  return maxArea;
};

//Time: O(n)
//Space: O(1)

```

## Question #3 Trapping Rainwater (Hard)

```Javascript
var trap = function (height) {
  const rightMaxes = [];
  let rightMax = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, height[i]);
    rightMaxes[i] = rightMax;
  }

  let waterCollected = 0;
  let leftMax = 0;
  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(leftMax, height[i]);
    const rightMax = rightMaxes[i];
    waterCollected += Math.min(leftMax, rightMax) - height[i];
  }
  return waterCollected;
};
```

## Question #4 Backspace String Compare (Easy)

```Javascript
var backspaceCompare = function (S, T) {
  let sArr = [];
  let tArr = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "#") {
      sArr.pop();
    } else {
      sArr.push(S[i]);
    }
  }
  for (let j = 0; j < T.length; j++) {
    if (T[j] === "#") {
      tArr.pop();
    } else {
      tArr.push(T[j]);
    }
  }
  sArr = sArr.toString();
  tArr = tArr.toString();

  return sArr === tArr;
};

//Time: O(n) Space: O(n)
```

## Question #5 Longest Substring Without Repeating Characters (Medium)

```Javascript
var lengthOfLongestSubstring = function (s) {
  let pointer = 0;
  let maxLength = 0;
  let memo = {};
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const prev = memo[current];
    if (prev >= pointer) {
      pointer = prev + 1;
    }
    memo[current] = i;
    maxLength = Math.max(maxLength, i - pointer + 1);
  }
  return maxLength;
};

//Time: O(n)
//Space: O(n)
```

## Question #6a Valid Palindrome(Easy)

```Javascript
var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

//Time: O(n)
//Space: O(1)
```

## Question #6b Almost Palindrome(Easy)

```Javascript
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] != s[right]) {
      return (
        isValidPalindrome(s, left + 1, right) ||
        isValidPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

var isValidPalindrome = function (str, left, right) {
  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

//Time: O(n)
//Space: O(1)
```
