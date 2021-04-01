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

// const twoSum = (nums, target) => {
//   let hash = {};

//   for (let i = 0; i < nums.length; i++) {

//       if (hash[nums[i]] >= 0) {
//           return [hash[nums[i]], i];
//       } else {
//           const diff = target - nums[i];
//           hash[diff] = i;
//       }
//   }
// };

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
