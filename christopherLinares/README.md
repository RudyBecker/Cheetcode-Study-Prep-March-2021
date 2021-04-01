## Arrays: Question #1 Google Interview Question Two Sum (Easy)

```javascript
var twoSum = function (nums, target) {
  numsIndexes = {};

  for (let i = 0; i < nums.length; i += 1) {
    //Iterate through array & compute currentDifference

    let currentElement = nums[i];
    let currentDifference = target - currentElement;

    //If currentDifference exists in hashTable and currentElementIndex !== hashTable[currentDifference], return the indices of each element.

    if (
      numsIndexes[currentDifference] !== undefined &&
      numsIndexes[currentDifference] !== i
    ) {
      return [numsIndexes[currentDifference], i];
    } else {
      //If currentDifference does not exist or the indices of both elements are equal, move to the next element in the array.

      numsIndexes[nums[i]] = i;
    }
  }
};
```
