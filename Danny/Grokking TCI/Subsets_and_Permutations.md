# Subsets

### Template

Subsets, unfortunately, run in O(2^N). Each iteration, unless avoiding duplicates, doubles the length of the output.

```js
function find_subsets(nums) {
  const subsets = [];
  // start by adding the empty subset
  subsets.push([]);
  for (i = 0; i < nums.length; i++) {
    currentNumber = nums[i];
    // we will take all existing subsets and insert the current number in them to create new subsets
    const n = subsets.length;
    for (j = 0; j < n; j++) {
      // create a new subset from the existing subset and insert the current element to it
      const set1 = subsets[j].slice(0); // clone the permutation
      set1.push(currentNumber);
      subsets.push(set1);
    }
  }

  return subsets;
}
```

# Permutations

Permutations are O(N!) Time.

Imperfect solution:

```js
const find_permutations = function(nums) {
  result = [];
  // TODO: Write your code here
  permutate(nums, result, []);
  return result;
};
const permutate = (nums, result, permutation) => {
  if(!nums.length) result.push(permutation);
  else {
    nums.forEach((number, i) => {
      const newNums = [...nums];
      const newPer = [...permutation, number];
      newNums.splice(i,1);
      console.log(newNums);
      permutate(newNums, result, newPer);
    });
  }
}
console.log(`Here are all the permutations: ${find_permutations([1, 3, 5])}`)
```
