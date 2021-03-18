# Question #1 Binary Tree Path Sum
## Time: O(n) --- Space: O(n)
###### Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const pathSum = (root, sum) => {
    if (root === null) {
        return false
    }

    if (root.value === sum && root.left === null && root.right === null) {
        return true
    }

    return pathSum(root.left, sum - root.value) || pathSum(root.right, sum - root.value)
}
```

# Question #2 All Paths for a Sum
## Time: --- Space: 
###### Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const allPaths = (root, sum) => {
    let results = []
    helperFunction(root, sum, queue = [root], results)
    return results
    
}

const helperFunction = (current, sum, path, results) {
    if (current === nulll) {
        return
    }
    if (current.value === sum && current.left === null && current.right === null) {
        results.push(queue.toArray())
    } else {
        helperFunction(current.left, sum - current.value, path, results)
        helperFunction(current.right, sum - current.value, path, results)
    }
    path.pop()
}
```
# Question #3 Sum of Path Numbers
## Time: --- Space:
###### Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = left
        this.right = right
    }
}

const pathNumbersSum = (root) => {
    return helperFunction(root, 0)

}

const helperFunction = (current, sum) => {
    if (current === null) {
        return 0
    }
    sum = 10 * sum + current.value

    if (current.left === null && current.right === null) {
        return sum
    }
    return helperFunction(current.left, sum) + helperFunction(current.right, sum)
}
```

# Question #4 Path With Given Sequence
## Time: --- Space:
###### Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = left
        this.right = right
    }
}

const pathSequence = (root, sequence) => {
    if (root === null) {
        return sequeunce.length === 0
    }
    return helperFunction(root, sequence, 0)

}

const helperFunction = (current, sequence, index) => {
    if (current === null) {
        return false
    }

    const length = sequence.length
    if (index >= length || current.value !== sequence, index) {
        return false
    }
    if (current.left === null && current.right === null && index === length - 1) {
        return true
    }

    return helperFunction(current.left, sequence, index + 1) || helperFunction(current.right, sequence, index + 1)
}
```

# Question #5 Count Paths for a Sum
## Time: --- Space:
###### Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = left
        this.right = right
    }
}

const countPaths = (root, sum) => {
    return helperFunction(root, sum, queue = [root])

}

const helperFunction = (current, sum, path) => {
    if (current === null) {
        return 0
    }
    
    path.push(current.value)
    let count = 0
    let runningSum = 0

    for (let i = path.length - 1; i >= 0; i--) {
        runningSum += path[i]

        if (runningSum === sum) {
            count += 1
        }
    }
    count += helperFunction(current.left, sum, path) 
    count += helperFunction(current.right, sum, path)

    path.pop()
    return count
}
```

# Question Problem Challenges #1 Tree Diameter 
## Time: --- Space:
###### Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.
```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = left
        this.right = right
    }
}

class TreeDiameter{
    constructor() {
        this.treeDiameter = 0
    }

    findDiameter(root) {
        return this.treeDiameter
    }

    calculateHeight(current) {
        if (current === null) {
            return 0
        }
    }

    const leftTreeHeight = this.calculateHeight(current.left)
    const rightTreeHeight = this.calculateHeight(current.right)

    const diameter = leftTreeHeight + rightTreeheight + 1

    this.treeDiameter = Math.max(this.treeDiameter, diameter)
    return Math.max(leftTreeHeight, rightTreeHeight) + 1
}
```





