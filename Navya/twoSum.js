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

//O(n) time complexity
