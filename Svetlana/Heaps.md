# Priority queue class implementation

NB! Underscores identify private methods available exclusively to this class

```js
class PriorityQueue {
  //note that the comparator determines the type of heap
  //MAX heap: a > b
  //MIN heap: a < b
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

const pq = new PriorityQueue();
pq.push(15);
pq.push(12);
pq.push(50);
pq.push(7);
pq.push(40);
pq.push(22);

while (!pq.isEmpty()) {
  console.log(pq.pop());
}
```

# Top 'K' Numbers

Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

Example 1:

Input: [3, 1, 5, 12, 2, 11], K = 3

Output: [5, 12, 11]

Example 2:

Input: [5, 12, 11, -1, 12], K = 3

Output: [12, 11, 12]

```js
const Heap = require("./collections/heap"); //http://www.collectionsjs.com

function find_k_largest_numbers(nums, k) {
  //initiate an empty min heap
  const minHeap = new Heap([], null, (a, b) => b - a);
  // put first 'K' numbers in the min heap
  for (i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  // go through the remaining numbers of the array, if the number from the array is bigger than the
  // top(i.e., smallest) number of the min-heap, remove the top number from heap and add the number from array
  for (i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }

  // the heap has the top 'K' numbers, return them in a list
  return minHeap.toArray();
}

console.log(
  `Here are the top K numbers: ${find_k_largest_numbers(
    [3, 1, 5, 12, 2, 11],
    3
  )}`
);
console.log(
  `Here are the top K numbers: ${find_k_largest_numbers(
    [5, 12, 11, -1, 12],
    3
  )}`
);
```
