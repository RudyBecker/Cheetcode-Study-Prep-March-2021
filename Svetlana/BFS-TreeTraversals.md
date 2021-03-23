# Binary tree - Iterative BFS using queue

Time: O(N); Space: O(N)

Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

We can use a Queue to efficiently traverse in BFS fashion. Here are the steps of our algorithm:

1. Start by pushing the root node to the queue.
2. Keep iterating until the queue is empty (while loop)
3. In each iteration, first count the elements in the queue (let’s call it levelSize). Store this in a separate variable. We will have these many nodes in the current level.
4. Next, remove levelSize nodes from the queue and push their value in an array to represent the current level.
5. After removing each node from the queue, insert both of its children into the queue.
6. If the queue is not empty, repeat from step 3 for the next level.

Example: 1

[[1],[2,3],[4,5,6,7]]

Root = 1,

Root.right = 2, Root.left = 3

2.left = 4, 2.right = 5

3.left = 6, 3.right = 7

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const traverse = function (root) {
  const result = [];
  const queue = []; //to help track each level

  //look at each level, pass in the nodes
  //for loop at each level to store values in a subarray
  queue.push(root);
  while (queue.length > 0) {
    //process each node
    const level = []; //will hold values for each level - subarray to be pushed into result
    const nodesAtLevel = queue.length;
    //need to store this to prevent side effects from increasing queue on each iteration
    //for loop will run n number of times where n stands for the number of nodes at this specific level
    for (let i = 0; i < nodesAtLevel; i++) {
      const node = queue.shift();
      level.push(node.value);

      //check if node has any kids, add them to the queue
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    //outisde of the for loop, push the processed nodes at this level into the result array
    result.push(level);
  }
  return result;
};
```

# Binary tree - recursive BFS

Time: O(N); Space: O(N)

```js
const traverse = function (root) {
  const result = [];

  //helper function recursively iterates through nodes - takes in current node and current level of the tree as params
  const recursiveHelper (node, level) {
    if (node === null) return; //base case - no more nodes
    if (!result[level]) { //initiate the level array if doesn't exist
      result[level] = []
    }
    result[level].push(node.val) //otherwise start populating subarray with node values at respective level
    //variable level determines the index at which we will be inserting the subarray into the result array, i.e. result[0] = root

    //run the function recursively, passing it current node's children and incrementing the level
    recursiveHelper(node.left, level+1);
    recursiveHelper(node.right, level+1)
  }
  //initiate recursive function with root and 0 as level
  recursiveHelper(root, 0);
  return result;
}
```

# Find minimum tree depth

Time: O(N); Space: O(N)

```js
const find_minimum_depth = function (root) {
  if (!root) {
    return 0;
  }
  const queue = [];
  let depth = 0;
  queue.push(root);
  while (queue.length > 0) {
    depth++;
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (node.left === null && node.right === null) {
        return depth; //return depth as soon as you find a node w/out children
      }
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
  return depth;
};
```

# Level order successor

Time: O(N); Space: O(N)

Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

```js
const find_successor = function (root, key) {
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
      if (node.val === key) {
        return queue.shift();
      }
    }
  }
  return null;
};
```
