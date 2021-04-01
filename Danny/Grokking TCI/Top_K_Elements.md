# Top K Elements

### Template
Use a heap to track the K greatest/smallest elements. If tracking greatest elements use a min heap and if tracking smallest elements use a max heap. Then return the top of the heap. Import a heap data structure for easy heap sorting when adding or removing an element(push & pop).

## Kth Smallest Number
Given an unsorted array of numbers, find Kth smallest number in it.

Time: O(N∗logK) | Space: O(K)

```js
const Heap = require('./collections/heap'); //http://www.collectionsjs.com
// peek(), pop(), and push(elem)

const find_Kth_smallest_number = function(nums, k) {
  // create a max heap
  const heap = new Heap();
  // push first k elements from the nums array
  for (let i = 0; i < k; i++) {
    heap.push(nums[i]);
  };
  // iterate through the rest of the nums array, replace the max if nums[i] < heap.peek()
  for (let i = k; i < nums.length; i++) {
    if (nums[i] < heap.peek()) {
      heap.pop();
      heap.push(nums[i]);
    }
  }
  // return the top of the heap
  return heap.pop();
};
```

## K Closest Points To The Origin
Given an array of points in the a 2D2D plane, find ‘K’ closest points to the origin.

Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
Output: [[1, 3], [2, -1]]

Time: O(N*log(K)) | Space: O(K)
```js
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const find_closest_points = function(points, k) {
  const _comparator = (a,b) => {
    return Math.pow(a.x,2) + Math.pow(a.y,2) - Math.pow(b.x,2) + Math.pow(b.y,2)
  };
  const lessThanPoint = (a,b) => {
    return Math.pow(a.x,2) + Math.pow(a.y,2) <  Math.pow(b.x,2) + Math.pow(b.y,2)
  };
  let heap = new Heap([], null, _comparator);
  for (let i =0; i < k; i++){
    heap.push(points[i]);
  }
  for (let i = k; i < points.length; i++) {
    if (lessThanPoint(points[i], heap.peek())) {
      heap.pop();
      heap.push(points[i]);
    }
  }
  return heap.toArray();
};
```

## Connect Ropes
Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost. The cost of connecting two ropes is equal to the sum of their lengths.

Solution: create a minimum heap. Pop off the top two (smallest) elements and add them. Add the new length to the cost. Push the new sum rope back to the heap. Repeat until only 1 elem in heap. Return cost.

Time: O(N*log(N)) Space: O(N)
```js
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const minimum_cost_to_connect_ropes = function(ropeLengths) {
  const minHeap = new Heap(ropeLengths, null, (a, b) => b-a);
  let cost = 0;

  while (minHeap.length > 1) {
    const newRope = minHeap.pop() + minHeap.pop();
    cost += newRope;
    minHeap.push(newRope);
  }

  return cost;
};
```
