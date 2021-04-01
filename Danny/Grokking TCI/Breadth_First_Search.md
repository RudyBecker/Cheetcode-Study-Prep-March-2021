# Breadth First Search a Binary Tree

## Template

## Breadth First Traversal
Time: O(N) | Space: O(N)
```js
function traverse(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      // add the node to the current level
      currentLevel.push(currentNode.val);
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }

  return result;
}
```
### Naive Solution - No Queue
```js
const traverse = function(root) {
  let result = [];
  if (!result.length) {
    result.push([root])
  };

  while (true) {
    const level = [];
    const prevLevel = result[result.length-1];
    prevLevel.forEach(node => {
      if (node.left !== null) level.push(node.left);
      if (node.right !== null) level.push(node.right);
    })
    if (!level.length) break;
    else result.push(level);
  };

  return result;
};
```

## Zig Zag Traversal
Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

Time: O(N) | Space: O(W) where W is the width of the widest level
```js
const traverse = function(root) {
  const result = [];
  let stack = [root];
  let startLeft = true;

  while (stack.length > 0) {
    const levelSize = stack.length;
    const currentLevel = [];
    const tempStack = [];
    for (let i = 0; i < levelSize; i++) {
      const currentNode = stack.pop();
      currentLevel.push(currentNode.value);

      if (startLeft) {
        if (currentNode.left !== null) tempStack.push(currentNode.left);
        if (currentNode.right !== null) tempStack.push(currentNode.right);
      } else {
        if (currentNode.right !== null) tempStack.push(currentNode.right);
        if (currentNode.left !== null) tempStack.push(currentNode.left);
      }
    }
    result.push(currentLevel)
    startLeft = !startLeft;
    stack = tempStack;
  }
  return result;
};
```
## Level Averages In A Binary Tree
Given a binary tree, populate an array to represent the averages of all of its levels.

Time: O(N) | Space: O(N) because the queue length is dictated by N and the size of the last level can be N/2 nodes

```js
const find_level_averages = function(root) {
  const queue = [root];
  const averages = [];
  while (queue.length > 0) {
    const numNodes = queue.length;
    let total = 0;
    for (let i = 0; i < numNodes; i++) {
      const node = queue.shift();
      total += node.value;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    averages.push(total / numNodes);
  }
  return averages;
};
```

## Minimum Depth of Binary Tree
Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

Time: O(N) | Space: O(N)
```js
const find_minimum_depth = function(root) {
  let level = 1;
  const queue = [root];
  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      // check for leaf node
      if (node.left === null && node.right === null) {
        return level;
      }
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
    }
    level++;
  }
};
```

## Level Order Successor
Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

Time: O(N) | Space: O(N)
```js
const find_successor = function(root, key) {
  const queue = [root];
  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      // update the queue
      if (node.left !== null) queue.push(node.left)
      if (node.right !== null) queue.push(node.right)
      // then check if node is the key
      if (node.val === key) {
        return queue.shift();
      }
    }
  }
  return null;
};
```
