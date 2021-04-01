# Sorting Algorithms

## Quick Sort
My naive solution
```js
const quickSort = function(nums) {
  if (nums.length <= 1) return nums;
  let pivotIdx = 0;
  let idx = nums.length-1;
  let iterLeft = true;
  let elemsSeen = 1;
  while (elemsSeen <= nums.length) {
      const elem = nums[idx];
      elemsSeen++;
      const shouldSwap = (elem < nums[pivotIdx] && iterLeft) || (elem > nums[pivotIdx] && !iterLeft);
      if (shouldSwap) {
          let tempIdx = idx;
          nums[idx] = nums[pivotIdx];
          nums[pivotIdx] = elem;
          idx = pivotIdx
          pivotIdx = tempIdx;
          iterLeft = !iterLeft;
      }
      idx = iterLeft ? idx-1 : idx+1;
  }
  return [...quickSort(nums.slice(0, pivotIdx)), nums[pivotIdx], ...quickSort(nums.slice(pivotIdx+1, nums.length))]
}
```
