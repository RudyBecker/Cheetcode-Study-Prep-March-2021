# Question #1 Binary Tree Level Orde Traversal

## Time: --- Space:

###### Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const traverse = function(root) {
    result = []

    if (root === null) {
        return result
    }
    const queue = [root]
    while (queue.length > 0) {
        const size = queue.length
        const level = []
        for (i = 0; i < size; i++) {
            current = queue.shift()
            level.push(current.val)

            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
        }
        result.push(level)

    }

    return result
}
```

# Reverse Level Order Traversal

## Time: --- Space:

###### Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
const traverse = function(root) {
    result = []

    if (root === null) {
        return result
    }
    const queue = [root]
    while (queue.length > 0) {
        const size = queue.length
        const level = []
        for (i = 0; i < size; i++) {
            current = queue.shift()
            level.push(current.val)

            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
        }
        result.unshift(level)

    }
    return result
}
```

# Question #3 Zigzag Traversal

## Time: --- Space:

###### Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const zigZagTraverse = (root) => {
    let result = []

    if (root === null) {
        return result
    }

    const queue = [root]
    isEvenLevel = false
    while (queue.length > 0) {
        const size = queue.length
        const level = []

        for (let i = 0; i < size; i++) {
            current = queue.shift()

            if (!isEvenLevel) {
                level.push(current.val)

            } else {
                level.unshift(current.val)

            }

            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
        }
        result.push(level)
        isEvenLevel = !isEvenLevel
    }
    return result
}
```
# Question #4 Level Averages in a Binary Tree
## Time: --- Space: 
###### Given a binary tree, populate an array to represent the averages of all of its levels.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const averageOfLevels = (root) => {
    let result = []

    if (root === null) {
        return result
    }

    const queue = [root]
    while (queue.length > 0) {
        const size = queue.length
        let runningSum = 0

        for (let i = 0; i < size; i++) {
            current = queue.shift()
            runningSum += current.val

            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
        }
        result.push(runningSum / size)
    }
    return result 
}

```

# Question #5 Minimum Depth of a Binary Tree
## Time: --- Space: 
###### Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function minDepth(root) {
    if (root === null) {
        return 0
    }
    const queue = [root]
    while (queue.length > 0) {
        const size = queue.length
        let depth += 1

        for (let i = 0; i < size; i++) {
            current = queue.shift()

            if (current.left === null || current.right null) {
                return depth
            }

            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }  
        }
    }
}
```

# Question #6 Level Order Successor
## Time: --- Space:
###### Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.
```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const findSuccessor = function(root, node) {
    if (root === null) {
        return null
    }
    const queue = [root]
    while (queue.lenght > 0) {
        current = queue.shift()

        if (current.left !== null) {
            queue.push(current.left)
        }
        if (current.right !== null) {
            queue.push(current.right)
        }
        if (current.value === node) {
            break
        }
    }
    if (queue.length > 0) {
        return queue[0] // return the first item in the queue - peek() method allows for the same functionality
    }
    return null
}
```
# Question #7 Connect Level Order Siblings
## Time: O(n) --- Space: O(n)
###### Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node
```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
        this.next = null
    }
}
const connectSiblings = (root) => {
    if (root === null) {
        return 
    }
    const queue = [root]
    while (queue.length > 0) {
        const size = queue.length
        let previous = null

        for (let i = 0; i < size; i++) {
            current = queue.shift()

            if (previous !== null) {
                previous.next = current
            }
            previous = current

            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
        }
    }

}
```
# Question Problem Challenge #1 Connect All Level Order Siblings
## Time: --- Space:
###### Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level
```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
        this.next = null
    }
}

const levelOrderSiblings = (root) => {
    if (root === null) {
        return
    }

    const queue = [root]
    let current = null
    let previous = null

    while (queue.length > 0) {
        current = queue.shift()

        if (previous !== null) {
            previous.next = current
        }
        previous = current

        if (current.left !== null) {
            queue.push(current.left)
        }
        if (current.right !== null) {
            queue.push(current.right)
        }
    }
}
```
# Question Problem Challenge #2 Right View of a Binary Tree
## Time: --- Space:
###### Given a binary tree, return an array containing nodes in its right view. The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const rightView = (root) => {
    let result = []

    if (root === null) {
        return result
    }

    const queue = [root]
    while (queue.length > 0) {
        const size = queue.length

        for (let i = 0; i < size; i++;) {
            current = queue.shift()

            if (i === size - 1) {
                result.push(current)
            }

            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(curren.right)
            }
        }
    }
    return result
}
```

