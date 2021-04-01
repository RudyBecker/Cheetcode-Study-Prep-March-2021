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

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 0
