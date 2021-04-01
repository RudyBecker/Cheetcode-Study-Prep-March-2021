## Question #1 Google Interview Question Two Sum (Easy)

```Javascript
const twoSum = (nums, target) => {
  if (nums.length < 2) return null;

  let p1 = 0;
  let p2 = 1;

  while (p2 < nums.length) {
    let diff = target - nums[p1];

    if (nums[p2] === diff) return [p1, p2];

    p2++;

    if (p2 === nums.length - 1 && nums[p2] !== diff) {
      p1++;
      p2 = p1 + 1;
    }
  }

  return null;
};
```

## Question #2 Container With Most Water (Medium)

```Javascript
const maxArea = (arr) => {
  let p1 = 0;
  let p2 = arr.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    let height = Math.min(arr[p1], arr[p2]);
    let width = p2 - p1;
    let area = width * height;
    maxArea = Math.max(maxArea, area);

    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};
```

## Question #3 Trapping Rainwater (Hard)

```Javascript
const trap = (height) => {
  let total = 0;

  for (let i = 0; i < height.length - 1; i++) {
    let leftP = i;
    let rightP = i;
    let maxL = 0;
    let maxR = 0;

    while (leftP >= 0) {
      maxL = Math.max(maxL, height[leftP]);
      leftP--;
    }

    while (rightP < height.length) {
      maxR = Math.max(maxR, height[rightP]);
      rightP++;
    }

    const currWater = Math.min(maxL, maxR) - height[i];

    if (currWater >= 0) total += currWater;
  }
  return total;
};
```

## Question #4 Backspace String Compare (Easy)

```Javascript
const typeStr = (str) => {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (letter === '#') {
      arr.pop();
    } else {
      arr.push(letter);
    }
  }

  return arr.join('');
};

const backspaceCompare = (str1, str2) => {
  return typeStr(str1) === typeStr(str2);
};
```

## Question #5 Longest Substring Without Repeating Characters (Medium)

```Javascript
const lengthOfLongestSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      start = Math.max(start, seen[str[i]]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[str[i]] = i + 1;
  }
  return longest;
};
```

## Question #6a Valid Palindrome(Easy)

```Javascript
const isPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let front = 0;
  let back = str.length - 1;

  while (front < back) {
    if (str[front] === str[back]) {
      front++;
      back--;
    } else {
      return false;
    }
  }
  return true;
};
```

## Question #6b Almost Palindrome(Hard)

```Javascript
const isPalindrome = (str, front, back) => {
  while (front < back) {
    if (str[front] !== str[back]) {
      return false;
    }
    front++;
    back--;
  }
  return true;
};

const isPalindromeII = (str) => {
  let front = 0;
  let back = str.length - 1;

  while (front < back) {
    if (str[front] !== str[back]) {
      return (
        isPalindrome(str, front + 1, back) || isPalindrome(str, front, back - 1)
      );
    }
    front++;
    back--;
  }
  return true;
};
```
