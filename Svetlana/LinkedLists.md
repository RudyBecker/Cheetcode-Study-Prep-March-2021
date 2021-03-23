# Problem 1 - Basic Linked List reversal

Time: O(n);
Space: O(1);

1. Construct a Linked List using JS class syntax

```js
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

let head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
```

2. Write a reverse function

```js
const reverse = function (head) {
  let current = head;
  let prev = null;
  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};
```
