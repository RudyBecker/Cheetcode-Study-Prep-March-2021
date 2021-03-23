# Topological Sort


```js
const topological_sort = function(vertices, edges) {
  // vertices is the number of nodes/verts -- hint at when to stop iterating
  // consider that we might have two entry points to the graph

  // array of subarrays each representing one sort thru the graph
  const sortedOrder = [];
  // note the value at the 0 index of each edge the key
  const adjacencyList = {};
  const inDegrees = {};
  // traversing the graph
  for (let i = 0; i < edges.length; i++) {
    const parent = edges[i][0], child = edges[i][1];
    if (!adjacencyList[parent]) {
      adjacencyList[parent] = [child];
    } else {
      adjacencyList[parent].push(child);
    }
    inDegrees[parent] = inDegrees[parent] || 0;
    // inDegrees[child] = inDegrees[parent] + 1
    inDegrees[child] = (inDegrees[child] || 0) + 1;
  }
  const queue = Object.keys(inDegrees).filter(vertex => inDegrees[vertex] === 0);
  // bfs
  while (queue.length > 0) {
    // add it to the sorted list
    const vertex = queue.shift();
    sortedOrder.push(vertex);
    // get all of its children from the graph
    console.log(`Vertex processed: ${vertex} | its children: ${adjacencyList[vertex] || 'none'}`)
    if (adjacencyList[vertex] === undefined) continue;
    adjacencyList[vertex].forEach(childVert => {
      // decrement the in-degree of each child by 1
      inDegrees[childVert] -= 1;
      // if a child's in-degree is 0 add it to the queue
      if (inDegrees[childVert] === 0) {
        queue.push(childVert);
      };
    });
  };

  // topological sort is not possible as the graph has a cycle
  if (sortedOrder.length !== vertices) {
    return [];
  }

  return sortedOrder;
};

```
