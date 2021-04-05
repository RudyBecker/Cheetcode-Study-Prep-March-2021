# Depth First Search

### Teplate

Recursion

## All Paths for a Sum
Time: O(N) | Space: O(K * log(N)) K = number of paths, log(N) = depth of tree

```js
const find_paths = function(root, sum) {
  const allPaths = [];
  if (!root) return allPaths;
  recurse_paths(root, sum, [], allPaths);
  return allPaths;
};

const recurse_paths = function(root, sum, path, allPaths) {
  if (root === null) return;
  sum -= root.value;
  if (sum < 0) return;
  path.push(root.value);
  if (sum === 0 && root.left === null && root.right === null) {
    // push a copy of the path
    allPaths.push(path.slice());
  } else {
    recurse_paths(root.left, sum, path, allPaths);
    recurse_paths(root.right, sum, path, allPaths);
  }
  // pop last node as we traverse back up call stack
  path.pop();
}
```
## Sum Of Path Numbers

Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.

Time: O(N) | Space: O(log(N))

```js
const find_sum_of_path_numbers = function(root, sum = 0) {
  if (root === null) return 0;
  sum *= 10;
  sum += root.value;
  if (root.left === null && root.right === null) {
    return sum;
  } else {
    return find_sum_of_path_numbers(root.left, sum) + find_sum_of_path_numbers(root.right, sum)
  }
};
```
## Path With Given Sequence

Given a binary tree and a number sequence (array of integers), find if the sequence is present as a root-to-leaf path in the given tree.

Time: O(N) | Space: O(N) - worst case
```js
const find_path = function(root, sequence) {
  if (root === null) return sequence.length === 0;

  return find_path_recurse(root, sequence, 0)
};

const find_path_recurse = function(root, sequence, idx) {
  if (root === null) return false;
  const sequenceValue = sequence[idx];
  if (root.value === sequenceValue && idx < sequence.length) {
    if (root.left === null && root.right === null && idx === sequence.length-1) {
      // Leaf Node and last value in sequence
      return true;
    } else {
      // Recurse
      return find_path_recurse(root.left, sequence, idx+1) || find_path_recurse(root.right, sequence, idx+1)
    }
  } else {
    // Wrong value
    return false;
  }
}
```

## Count Paths To A Sum
Hard problem involving backtracking. Time: O(N*log(N)) | Space: O(log(N))

Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

```js
const count_paths = function(root, sum) {
  return count_paths_recursive(root, sum, [])
};


const count_paths_recursive = function(root, sum, list) {
  if (root === null) return 0;
  let validPaths = 0, pathSum = 0;
  list.push(root.value);
  for (let i = list.length - 1; i >= 0; i--) {
    pathSum += list[i];
    if (pathSum === sum) {
      validPaths++;
    }
  }
  // Recurse left and right and add to validPaths
  validPaths += count_paths_recursive(root.left, sum, list);
  validPaths += count_paths_recursive(root.right, sum, list);
  // Pop the final value for backtracking
  list.pop();
  return validPaths;
}
```
