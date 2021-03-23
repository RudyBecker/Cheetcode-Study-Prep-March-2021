# Game of Life

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

```js
var gameOfLife = function (board) {
  const copy = JSON.parse(JSON.stringify(board));

  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board[0].length; row++) {
      board[col][row] = calculateBoard(col, row, copy);
    }
  }
};

const calculateBoard = (column, row, board) => {
  let neighbors = 0;

  for (let i = -1; i <= 1; i++) {
    if (board[column + 1]?.[row + i] === 1) neighbors++;
    if (board[column - 1]?.[row + i] === 1) neighbors++;
  }

  if (board[column][row + 1] === 1) neighbors++;
  if (board[column][row - 1] === 1) neighbors++;

  if (board[column][row] === 0) {
    if (neighbors === 3) return 1;
    else return 0;
  }
  if (neighbors < 2) return 0;
  if (neighbors > 3) return 0;
  else return 1;
};
```

# Find duplicate files

Given a list of directory info including directory path, and all the files with contents in this directory, you need to find out all the groups of duplicate files in the file system in terms of their paths.

A group of duplicate files consists of at least two files that have exactly the same content.

A single directory info string in the input list has the following format:

"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"

It means there are n files (f1.txt, f2.txt ... fn.txt with content f1_content, f2_content ... fn_content, respectively) in directory root/d1/d2/.../dm. Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

The output is a list of group of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

"directory_path/file_name.txt"

Example 1:

Input:
["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
Output:
[["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]

Note:

1. No order is required for the final output.
2. You may assume the directory name, file name and file content only has letters and digits, and the length of file content is in the range of [1,50].
3. The number of files given is in the range of [1,20000].
4. You may assume no files or directories share the same name in the same directory.
5. You may assume each given directory info represents a unique directory. Directory path and file info are separated by a single blank space.

## Long Solution

```js
var findDuplicate = function (paths) {
  const filePathMap = {};
  paths.forEach((path) => {
    let root = path.split(" ").slice(0, 1);
    //slice the first element only
    let files = path.split(" ").slice(1);
    //slice everything after the first element
    files.forEach((file) => {
      let fileName = file.slice(0, file.indexOf("("));
      //slice everything prior to the opening parenthesis - i.e. file name
      let content = file.slice(file.indexOf("(") + 1, file.indexOf(")"));
      //slice everything between parentheses, i.e. file content

      let fullFilePath = [root, fileName].join("/");
      //join root at file name for file path

      if (!(content in filePathMap)) {
        filePathMap[content] = [fullFilePath];
        //if content (key) is not in the map, add it to the map with respective path as a singleton array
      } else {
        //else push path into the array of file paths at respective key
        filePathMap[fileContent].push(fullFilePath);
      }
    });
  });
  const duplicateFilePaths = [];
  //if our map has more than one file path under the same key representing file content, it means we found our duplicates, return those file paths
  Object.keys(filePathMap).forEach((key) => {
    if (filePathMap[key].length > 1) {
      duplicateFilePaths.push(filePathMap[key]);
    }
  });
  return duplicateFilePaths;
};
```

## Short Solution

```js
vco findDuplicate = function(paths) {
    let dict = {};

    for (let i = 0; i < paths.length; i++) {
        let curr = paths[i].split(' ');
        let root = curr[0] + '/';
        for (let j = 1; j < curr.length; j++) {
            let start = curr[j].indexOf('(');
            let end = curr[j].indexOf(')');
            let key = curr[j].slice(start + 1, end);
            if (!dict.hasOwnProperty(key)) {
                dict[key] = [];
            }
            dict[key].push(root + curr[j].slice(0, start));
        }
    }
    return Object.values(dict).filter(arr => arr.length > 1);
};
```

# Combination Sum - this is a backtracking problem

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Example 1:

Input: candidates = [2,3,6,7], target = 7

Output: [[2,2,3],[7]]

Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7.
Note that 2 can be used multiple times.

7 is a candidate, and 7 = 7.

These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8

Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1

Output: []

Example 4:

Input: candidates = [1], target = 1

Output: [[1]]

Example 5:

Input: candidates = [1], target = 2

Output: [[1,1]]

```js

```

# LRU Cache with a Linked List

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.

int get(int key) Return the value of the key if the key exists, otherwise return -1.

void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

```js
// We need to implement a Linked List to
// help with LRUCache

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.cache_vals = new LinkedList();
  }
  set(key, value) {
    if (this.cache[key]) {
      let node = this.cache[key];
      node.data = value;
      this.cache_vals.remove(node);
      this.cache_vals.insert_at_tail(node);
    } else {
      this.evict_if_needed();
      let node = new LinkedListNode(key, value);
      this.cache_vals.insert_at_tail(node);
      this.cache[key] = node;
    }
  }

  get(key) {
    if (this.cache[key]) {
      let node = this.cache[key];
      this.cache_vals.remove(node);
      this.cache_vals.insert_at_tail(node);
      return node.data;
    } else {
      return -1;
    }
  }

  evict_if_needed() {
    if (this.cache_vals.size >= this.capacity) {
      node = this.cache_vals.remove_head();
      this.cache.remove(node);
    }
  }

  printcache() {
    let node = this.cache_vals.head;
    while (node) {
      console.log(node.key + " " + node.data + ", ");
      node = node.next;
    }
  }
}
```

# LRU Cache with Map

!NB Map is an object that remembers the insertion order of key/val pairs.

Hence, we delete/insert in order to mark an item as most recenctly used/inserted

```js
var LRUCache = function (capacity) {
  this.max = capacity;
  this.map = new Map();
};
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const tmp = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, tmp);
    return tmp;
  }
  return -1;
};
LRUCache.prototype.put = function (key, value) {
  // if it has the key, delete it and update it with the new value (line 282)
  if (this.map.has(key)) {
    this.map.delete(key);
    // if the key is not in the map, check capacity
  } else if (this.map.size === this.max) {
    // if at max capacity, evict the least recently used item
    this.map.delete(this.map.keys().next().value);
  }
  //set the new key/val pair
  this.map.set(key, value);
};
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4); // return 4
console.log(lRUCache); // LRUCache { max: 2, map: Map { 3 => 3, 4 => 4 } }
console.log(lRUCache.map.keys()); // [Map Iterator] { 3, 4 }
// THIS IS THE LEAST RECNELTY USED VALUE, THE ONE WE SHOULD EVICT
console.log(lRUCache.map.keys().next()); // { value: 3, done: false }
console.log(lRUCache.map.keys().next().value); // 3
```
