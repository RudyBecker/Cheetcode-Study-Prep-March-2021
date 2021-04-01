## Question #1 Google Interview Question Two Sum (Easy)

```javascript
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(remainder, i);
    }
  }
  return [];
};
```

## Question #2 Container With Most Water (Medium)

```javascript
var maxArea = function(height) {
let left =0;
let right =height.length-1;
let areaMax =0;

while(left < right){
  areaMax = Math.max(areaMax, Math.min(height[left], height[right]) * (right-left))
  if(height[left]<height[right]){
    left++;
  }
  else {
    right--;
  }
}
```

## Question #3 Trapping Rainwater (Hard)

```javascript
/*
1. Identify the pointer with the lesser value
2. Is this pointer value greater than or equal to max on that side
  yes -> update max on that side
  no -> get water for pointer, add to total
3. move pointer inwards
4. repeat for other pointer
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0,
    right = heights.length - 1,
    totalWater = 0,
    maxLeft = 0,
    maxRight = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }

      right--;
    }
  }

  return totalWater;
};
```

## Question #4 Backspace String Compare (Easy)

```javascript
var backspaceCompare = function(S, T) {

    let i= S.length-1, j =T.length-1;
    let skipS =0, skipT=0;
    while(i >=0 || j >= 0){
        //find position for next possible char in S
        while(i >=0){
            if(S[i] ==='#') {
                skipS++;
            }
            else if (skipS >0){
                skipS--;
            }
            else break;
            i--;
        }
        //find position for next possible char in S
        while(j >=0){
            if(T[j] ==='#') {
                skipT++;
            }
            else if (skipT >0){
                skipT--;
            }
            else break;
            j--;
        }
        // If two actual characters are different
        if(i >=0 && j>=0 && S[i] != T[j]){
            return false;
        }
        if((i>=0) != (j>= 0)){
            return false;
        }
        i--;
        j--;
    }
    return true;

};

}
```

## Question #5 Longest Substring Without Repeating Characters (Medium)

```javascript
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let index = {};
  let right = 0;

  for (let left = 0; right < s.length; right++) {
    // use left or old value of right where we have already tested the ones b4
    left = Math.max(index[s[right]] || 0, left);
    max = Math.max(max, right - left + 1);
    //save right so left can move to it later
    index[s[right]] = right + 1;
  }
  return max;
};
```

## Question #6a Valid Palindrome(Easy)

```javascript
var isPalindrome = function (s) {
  let clean = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  return clean === clean.split("").reverse().join("");
};

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  let left = 0;
  right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
```

## Question #6b Almost Palindrome (Easy)

```javascript
var validSubPalindrome = function (s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

var validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        validSubPalindrome(s, start + 1, end) ||
        validSubPalindrome(s, start, end - 1)
      );
    }
    start++;
    end--;
  }
  return true;
};
```
