## Question #1 Google Interview Question Two Sum (Easy)

```javascript
var twoSum = function (nums, target) {
  let hashTable = {};

  for (let [index, num] of nums.entries()) {
    if (hashTable[num] !== undefined) return [hashTable[num], index];
    hashTable[target - num] = index;
  }
};
```

## Question #2 Container With Most Water (Medium)

```javascript
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let length = Math.min(height[left], height[right]);
    let currentArea = length * width;
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
```

## Question #3 Trapping Rainwater (Hard)

```javascript
var trap = function (height) {
  let totalWater = 0;
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        totalWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        totalWater += maxRight - height[right];
      }
      right--;
    }
  }
  return totalWater;
};
```
