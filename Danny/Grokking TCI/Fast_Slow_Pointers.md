# Fast and Slow Pointers

### Template
Used primarily to find cycles in a Linked List, but has other applications. The Slow ref will iterate 1 node (or function call) at a time, while the Fast ref will iterate 2 nodes (or function calls) at a time. In a cycle, they will meet before slow reaches the end.

```js
function has_cycle(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true; // found the cycle
    }
  }
  return false;
}
```

You can find the start of a cycle (if a LL has one) by first finding the length of the cycle using a counter, then resetting both pointers to the head, giving fast a [length of cycle] headstart, and incrementing both pointers at the same rate. Where they meet is the cycle start.

```javascript
function find_cycle_start(head) {
  cycle_length = 0;
  // find the LinkedList cycle
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      // found the cycle
      cycle_length = calculate_cycle_length(slow);
      break;
    }
  }
  return find_start(head, cycle_length);
}
function calculate_cycle_length(slow) {
  let current = slow,
    cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}
function find_start(head, cycle_length) {
  let pointer1 = head,
    pointer2 = head;
  // move pointer2 ahead 'cycle_length' nodes
  while (cycle_length > 0) {
    pointer2 = pointer2.next;
    cycle_length -= 1;
  }
  // increment both pointers until they meet at the start of the cycle
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
}
```

## Middle Of A Linked List
Not for finding a cycle, but for finding the middle in one pass.
```js
const find_middle_of_linked_list = function(head) {
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next;
  }

  return slow;
}
```
## Find Happy Number
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
```js
function findHappyNumber(num) {
  // create fast and slow pointers
  let fast = findSqSum(findSqSum(num));
  let slow = findSqSum(num);

  while (fast !== slow) {
    fast = findSqSum(findSqSum(fast));
    slow = findSqSum(slow);
  }

  return fast === 1
}
```

## Palindrome Linked List
Given the head of Singly Linked List, write a method to check if the LL is a palindrome or not.
- Couldn't figure this out without solution.

## Rearrange a Linked List
Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order.
- Refered to reverse nodes function from previous problem to solve.

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
