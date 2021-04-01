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

//O(n) time complexity
