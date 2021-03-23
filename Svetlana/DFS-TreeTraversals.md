# Binary Tree Path Sum

Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

```js
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function hasPath(root, sum) {
  if (root === null) {
    return false;
  }

  // if the current node is a leaf and its value is equal to the sum, we've found a path
  if (root.val === sum && root.left === null && root.right === null) {
    return true;
  }

  // recursively call to traverse the left and right sub-tree
  // return true if either of the two recursive calls returns true
  return (
    hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
  );
}
```
