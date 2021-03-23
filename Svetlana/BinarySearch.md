# Order-agonstic binary search

Time: O(logN); Space: O(1)

Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

!!NB
The safest way to find the middle of two numbers without getting an integer overflow is as follows:

middle = start + (end-start)/2

```js
function binary_search(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  const isAscending = arr[start] < arr[end];
  while (start <= end) {
    // calculate the middle of the current range
    mid = Math.floor(start + (end - start) / 2);

    if (key === arr[mid]) {
      return mid;
    }
    if (isAscending) {
      // ascending order
      if (key < arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else {
        // key > arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    } else {
      // descending order
      if (key > arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else {
        // key < arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    }
  }

  return -1; // element not found
}
```

# Validate Binary Search Tree

Time = O(N); Space = 0(1);

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

```js
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  //added min and max as params

  if (root === null)
    //if we get here, all nodes have passed the test
    return true;

  //this if condition is evaluating if the BFS is valid
  //if the root of the tree/subtree fails this condition, the tree is invalid
  if (root.val <= min || root.val >= max) return false;

  //otherwise run the func recursively on right and left subtrees
  //right subtree - limit the min value
  //left subtree - limit the max value
  return (
    isValidBST(root.right, root.val, max) &&
    isValidBST(root.left, min, root.val)
  ); //returns true only if both recursive calls return true
};
```
