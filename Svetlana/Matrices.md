# DFS Traversal of a matrix

Space: O(N); Time: O(N);

```js
const testMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

//idx 0 = column, idx 1 = row
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const traversalDFS = function (matrix) {
  //create a helper matrix of the same size populated with falsey values
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  //to store all visited nodes of the matrix
  const values = [];

  //initiate recursive dfs function at the top left coner of the matrix
  dfs(matrix, 0, 0, seen, values);

  return values;
};

//recursive traversal function
const dfs = function (matrix, row, col, seen, values) {
  //base case: if we're out of bounds or have already visited the node
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  )
    return;

  seen[row][col] = true; //mark current coordinates as seen
  values.push(matrix[row][col]); //push current node into the results array

  //to recurse in all 4 directions, iterate over the directions array
  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
};

console.log(traversalDFS(testMatrix));
```

# BFS Traversal of a matrix

Space: O(N); Time: O(N);

```js
const testMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const traversalBFS = function (matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  //queue is a 2D Array that stores the row/col coordinates of each node
  const queue = [[0, 0]];

  //iterate until there are no more values in queue
  while (queue.length) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];

    //skip iteration if we are out of bounds or have already seen the node
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      seen[row][col]
    ) {
      continue;
    }

    seen[row][col] = true; //mark current coordinates as seen
    values.push(matrix[row][col]); //process current node

    //explore the neighbors of the current node
    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      queue.push([row + currentDir[0], col + currentDir[1]]);
    }
  }

  return values;
};

console.log(traversalBFS(testMatrix));
```

# Number of Islands - BFS

## Problem Statement

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [

["1","1","1","1","0"],

["1","1","0","1","0"],

["1","1","0","0","0"],

["0","0","0","0","0"]
]

Output: 1

Example 2:

Input: grid = [

["1","1","0","0","0"],

["1","1","0","0","0"],

["0","0","1","0","0"],

["0","0","0","1","1"]

]

Output: 3

## Approach 1: BFS with queue

1.  Two nested for loops to traverse matrix
2.  Check if current cell is land ("1") - if statement
3.  If yes:

    a. increment islandCount

    b. flip cell to 0 to mark as seen

    c. add coordinates to queue as a subarray

4.  Start processing queue (while loop inside if statement)

    a. shift first element, store as current coordinates

    b. store our X and Y as currentRow and currentCol for easy access

5.  Inititate for loop inside while to apply directions to current coordinates

    a. move positions by adding directions[i] values to current X and Y

    b. check if result is within bounds of the matrix

    c. if out of bounds - continue

    d. if within bounds and === "1" (unprocessed land :D)

        - push the coordinates into the queue

        - flip value at coordinates to "0" to mark as seen/processed

6.  close 6 curlies
7.  return number of Islands

```js
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const numberOfIslands = function (matrix) {
  if (matrix.length === 0) return 0;
  let islandCount = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        islandCount++;
        matrix[row][col] = 0;
        const queue = [];
        queue.push([row, col]);

        while (queue.length) {
          const currentPos = queue.shift();
          const currentRow = currentPos[0];
          const currentCol = currentPos[1];

          for (let i = 0; i < directions.length; i++) {
            const movePos = directions[i];
            const nextRow = currentRow + movePos[0];
            const nextCol = currentCol + movePos[1];

            if (
              nextRow < 0 ||
              nextRow >= matrix.length ||
              nextCol < 0 ||
              nextCol >= matrix[0].length
            )
              continue;

            if (matrix[nextRow][nextCol] === 1) {
              queue.push([nextRow, nextCol]);
              matrix[nextRow][nextCol] = 0;
            }
          }
        }
      }
    }
  }

  return islandCount;
};
```

## Approach 2 - DFS

```js
const numIslands = (grid) => {
  let counter = 0;

  //recursive function
  const dfs = (i, j) => {
    //if coordinates are within bounds and have not been visited
    if (
      i >= 0 &&
      j >= 0 &&
      i < grid.length &&
      j < grid[i].length &&
      grid[i][j] === "1"
    ) {
      //mark coordinates as visited
      grid[i][j] = "0";
      //run recursive function in each direction
      dfs(i + 1, j); // top
      dfs(i, j + 1); // right
      dfs(i - 1, j); // bottom
      dfs(i, j - 1); // left
    }
  };
  //double for loop to iterate sequentially over the matrix
  //run recursive call on every cell
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === "1") {
        counter += 1;
        dfs(i, j);
      }
    }
  }
  return counter;
};
```

# Rotten oranges - BFS solution

Time: O(N); Space: O(N)

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]

Output: 4

Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]

Output: -1

Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:

Input: grid = [[0,2]]

Output: 0

Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

```js
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

const orangesRotting = function (matrix) {
  if (matrix.length === 0) return 0;

  const queue = [];
  let freshOranges = 0;

  //Part I: Sequential order traversal of entire matrix:
  //1) identify starting points for rotting pattern
  //2) count total number of fresh oranges
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      //push coordinates of rotten oranges into the queue
      if (matrix[row][col] === ROTTEN) {
        queue.push([row, col]);
      }
      //count total fresh oranges
      if (matrix[row][col] === FRESH) {
        freshOranges++;
      }
    }
  }

  let minutes = 0;

  //need to store current queue size to keep track of minutes/levels/lifecycles - similar to level-by-leve BST traversal
  let currentQueueSize = queue.length;

  //while we have items in the queue to process
  while (queue.length > 0) {
    //if current queue size is 0, we are in the next cycle - increment minutes and re-instantiate current queue size
    if (currentQueueSize === 0) {
      currentQueueSize = queue.length;
      minutes++;
    }

    //process current coordinates
    const currentOrange = queue.shift();
    currentQueueSize--;
    const row = currentOrange[0];
    const col = currentOrange[1];

    //process all adjacent cells
    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const nextRow = row + currentDir[0];
      const nextCol = col + currentDir[1];

      //check if coordinates are within the bounds of matrix
      //if not, skip iteration
      if (
        nextRow < 0 ||
        nextRow >= matrix.length ||
        nextCol < 0 ||
        nextCol >= matrix[0].length
      ) {
        continue;
      }

      //if we find an adjacent fresh orange, mark as rotten (2), decrement total fresh oranges, push coordinates into queue
      if (matrix[nextRow][nextCol] === FRESH) {
        matrix[nextRow][nextCol] = 2;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  //if at the end of the while loop we are left with any fresh oranges, then retun -1
  if (freshOranges !== 0) {
    return -1;
  }

  return minutes;
};
```

# Walls and Gates - DFS Solution

Space: O(N); Time: O(N)

Given a 2D array containing -1s (walls), 0s(gates) and INF (empty rooms), fill each empty room with the number of steps to the nearest gate.

If it is impossible to reach a gate, leave INF as the value. INF = 2147483647

- cannot move through walls
- cannot move diagonally
- need to mutate the original matrix

NB! The optimal approach is to take gates as starting points and start counting steps to adjacent cells

Approach:

1. Perform sequential search to identify gates
2. From each gate, start DFS of adjacent cells, increment number of steps, if adjacent cell's value is greater than current number of steps, reassign

```js
const INF = 2147483647;

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

//recursive function, takes grid, coordinates and current step count
const dfs = (grid, row, col, count) => {
  //if coordinates are outside of the bounds of matrix
  //or if value at coordinates is less than current step count
  //return (exit out of the recursion loop)
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    count > grid[row][col]
  )
    return;

  //if not, reassign the value at coordinates to current step count
  grid[row][col] = count;
  //for each adjacent cell (iterate over directions)
  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    //perform dfs - pass coordinates of current direction and increase step count by 1
    dfs(grid, row + currentDir[0], col + currentDir[1], count + 1);
  }
};

//main function
const wallsAndGates = (rooms) => {
  //perform sequential search of the matrix
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      //if a gate is identified, initiate dfs at current coordinates and step count of 0
      if (rooms[row][col] === GATE) dfs(rooms, row, col, 0);
    }
  }
};

wallsAndGates(testMatrix);

console.log(testMatrix);
```
