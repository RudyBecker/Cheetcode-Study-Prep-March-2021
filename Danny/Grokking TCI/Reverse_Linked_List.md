# Reverse A Linked List

## Template
You will need a lot of variables, including a temp var when swapping the order of two nodes. Mind your edge cases such as: Reverse a sub list that starts at the head or ends at the tail.

```js
const reverse = function(head) {
  if (!head.next) return head;
  // let's keep a ref to the prev node
  let prev = null;
  while (head) {
    // head.next is going to be the previous node
    let temp = head.next;
    // the reverse: head.next points to prev
    head.next = prev;
    // head is the current node we're looking at - make it prev
    prev = head;
    // look at temp next
    head = temp;
  }
  return prev;
};
```

## Reverse Sub List
```js
const reverse_sub_list = function(head, p, q) {
  let prev = null
  let cur = head
  let position = 1
  // Iterate to position p
  while (position < p) {
    prev = cur
    cur = cur.next
    position++
  }
  // Set up our temp vars
  let tempHead = cur
  let tempPrev = null
  while (position < q) {
    let temp = tempHead.next
    tempHead.next = tempPrev
    tempPrev = tempHead
    tempHead = temp
    position++
  }
  // Connect it all together
  if (prev !== null) {
    prev.next = tempHead
  } else {
    head = tempHead;
  }
  let tempTail = tempHead.next
  tempHead.next = tempPrev
  cur.next = tempTail

  return head;
};
```

## Reverse Between
```js
const reverseBetween = function(head, left, right) {
  let prev = null;
  let curr = head;
  while (curr !== left) {
      prev = curr;
      curr = curr.next;
  }
  let segmentTail = curr;
  let next = null;
  while (curr !== right) {
      let temp = curr.next;
      curr.next = next;
      next = curr;
      curr = temp;
  }
  segmentTail.next = curr.next;
  curr.next = next;
  prev.next = curr;
  return head;
};
```

## Rearrange a Linked List
Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

```js
const reorder = function(head) {
  // Find the middle node of the list
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse the middle of the LL to the end, store new head
  let second = reverseNodes(slow);
  let first = head;
  // Iterate through the LL's, inserting all the values after the head
  while (second !== null && first !== null) {
    let firstNext = first.next;
    let secondNext = second.next;
    first.next = second;
    second.next = firstNext;
    first = firstNext;
    second = secondNext;
  }

  return head;
}

function reverseNodes(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
```
