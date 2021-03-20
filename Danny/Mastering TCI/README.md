# Arrays

## 1. Two Sum

```js
// Time: O(N) | Space: O(N)
const twoSum = function(nums, target) {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (dict[diff] !== undefined) {
            return [dict[diff], i]
        } else {
            dict[nums[i]] = i;
        }
    }
};
```

# Strings

## 4. Backspace String Compare

```js
// Brute Force: Time: O(N^2) | Space: O(1)
const backspaceCompare = function(S, T) {
  return backspaceChars(S) === backspaceChars(T)
};

const backspaceChars = function(str) {
  let i = str.length-1;
  while (i >= 0) {
      if (str[i+1] === '#' && str[i] !== '#') {
        str = str.slice(0, i) + str.slice(i+2, str.length1)
      }
      i--;
  }
  // First char is backspace
  if (str[0] === '#') return str.slice(1)
  return str;
}

// Stack Solution: Time: O(N) | Space: O(N)
// 3 Pass O(N) Solution
const backspaceCompare = function(S, T) {
    const sStack = [];
    const tStack = [];
    createStack(S, sStack);
    createStack(T, tStack);

    if (sStack.length !== tStack.length) return false;
    for (let i = 0; i < sStack.length; i++) {
        if (sStack[i] !== tStack[i]) {
            return false
        }
    }

    return true;
}

const createStack = function(str, stack) {
        for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char !== '#') {
            stack.push(char)
        } else {
            stack.pop();
        }
    }
}
```

# Linked Lists

## 7. M, N Reversals

```js
// Time: O(N) | Space: O(1)
const reverseBetween = function(head, left, right) {
  let prev = null;
  let curr = head;
  while (curr !== left) {
      prev = curr;
      curr = curr.next;
  }
  let segmentTail = curr;
  let next = null;
  while (curr !== right) {
      let temp = curr.next;
      curr.next = next;
      next = curr;
      curr = temp;
  }
  segmentTail.next = curr.next;
  curr.next = next;
  prev.next = curr;
  return head;
};
```
# Stacks

# Queues

# Recursion

## 13. Kth Largest Element
Given an integer array nums and an integer k, return the kth largest element in the array.

Recursive Solution.
Time: O(log(N)) | Space: O(log(N))
```js
const findKthLargest = function(nums, k) {
  if (nums.length <= 1) return nums[0];
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
  if (nums.length-k === pivotIdx) return nums[pivotIdx];
  else if (k > pivotIdx) {
      k -= (nums.length-pivotIdx)
      return findKthLargest(nums.slice(0, pivotIdx), k)
  } else {
      return findKthLargest(nums.slice(pivotIdx+1), k)
  }
};
```

## 19. Validate Binary Search Tree
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

* The left subtree of a node contains only nodes with keys less than the node's key.
* The right subtree of a node contains only nodes with keys greater than the node's key.
* Both the left and right subtrees must also be binary search trees.

Time: O(N) | Space: O(N)
```js
var isValidBST = function(root) {

    const helper  = (current, max = Infinity, min = -Infinity) => {
        if (current === null ) return true;

        if(current.val < max && current.val > min ){
            return helper(current.left, current.val, min) && helper(current.right, max, current.val)
        }  else {
            return false
        }
    }
    return helper(root)

};
```

# 2-D Arrays

## 21. Rotten Oranges
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Time: O(nm) | Space: O(r) where r is the maximum number of oranges rottings in any iteration
```js
var orangesRotting = function(grid) {
    let minutesElapsed = 0;
    let freshOranges = 0;
    let rottenOrangesQueue = [];

    // traverse the entire grid, determine # of fresh oranges and add rottens to queue
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 2) {
                rottenOrangesQueue.push([row, col]);
            } else if (grid[row][col] === 1) {
                freshOranges++;
            }
        }
    }

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    while (rottenOrangesQueue.length > 0 && freshOranges > 0) {
        const newlyRotten = rottenOrangesQueue.length;
        for (let i = 0; i < newlyRotten; i++) {
            const [row, col] = rottenOrangesQueue.shift();
            directions.forEach(([rowCh, colCh]) => {
                freshOranges -= rotAdjacentOrange(grid, row+rowCh, col+colCh, rottenOrangesQueue)
            })
        }

        minutesElapsed++;
    }

    return freshOranges > 0 ? -1 : minutesElapsed;
};


function rotAdjacentOrange(grid, row, col, rottenOrangesQueue) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] !== 1) return 0;
    else {
        grid[row][col] = 2;
        rottenOrangesQueue.push([row, col]);
        return 1;
    }
}
```

## 22. Walls And Gates
You are given an m x n grid rooms initialized with these three possible values.

-1 A wall or an obstacle.
0 A gate.
INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Time: O(MN) | Space: O(1) -- Queue will never have more than 4 elements
```js
var wallsAndGates = function(rooms) {
    if (rooms.length ==0) return rooms;
    const GATE = 0;
    const WALL = -1;
    const EMPTY = 2147483647;
    const DIRECTIONS = [
        [-1, 0],
        [1,0],
        [0,1],
        [0,-1]
    ];
    function isNotInBounds(rooms, rows, cols, r, c){
        return r < 0 || c < 0 || r >= rows || c >= cols;
    }
    function findDistanceToGate(rooms, rows, cols, r, c){
        let queue = [[r,c]];
        let distance =1;
        while(queue.length > 0){
            let levelLength = queue.length;
            for(let i =0; i < levelLength; i++){
                let [currR, currC] = queue.shift();
                for(let j=0; j < DIRECTIONS.length; j++){
                    let [changeR, changeC] = DIRECTIONS[j];
                    let newR = currR + changeR;
                    let newC = currC + changeC;
                    //if its in bounds and if its empty room
                    if(isNotInBounds(rooms, rows, cols, newR, newC)){
                        continue;
                    }
                    //if distance is less than the value of the room
                    // set room to new distance
                    // add room to queue
                    if(rooms[newR][newC] >= distance +1){
                        rooms[newR][newC] = distance;
                        queue.push([newR, newC])
                    }
                }
            }
            distance++;
        }
    }
    let rows = rooms.length;
    let cols = rooms[0].length;
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(rooms[r][c] === GATE){
                findDistanceToGate(rooms, rows, cols, r, c)
            }
        }
    }
    return rooms;
};

```
