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

console.log(maxArea([7, 1, 2, 3, 9])); // 28
console.log(maxArea([])); // 0
console.log(maxArea([8])); // 0
console.log(maxArea([6, 9, 3, 4, 5, 8])); // 32
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 2, 1])); //1
