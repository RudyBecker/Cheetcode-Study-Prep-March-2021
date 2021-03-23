/*
LRU Cache Class
params: Capacity pos int
get func: takes number as key, returns value at that key if exists, else -1
put func: takes (key, value) both numbers, updates the value of key if exists, otherwise add as Cache: if we exceed the capacity, update the keys to remain within capacity by removing the LRU key-value pair

what updates the MRU usage value of a key?
calling put or get

cache = new LRUCache(3)

cache.put(1, 1)
cache.put(2, 2)
cache.put(3, 3)
cache.get(1, 1)
cache.put(4, 4)

hashmap to track key-value pairs. the value is a LL node. the node actually has the return value.

how to keep track and update the LRU key-value pair?
doubly LL   3 -> 4 -> 1

hashmap[key] = return the value, also store the ref to the node in our LL
doublyLL remove 1 and add to the tail
  connect the prev to the next value
  doublyLL.setTail(key)

  create a DLL Class with setHead, setTail
  create a Node Class with prev, next, value
  create a hashMap with int keys and Node values
  on the LRU class: current size
*/

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // reminder if node already in DLL, connect prev and next
    if (this.head === null) {
      this.tail = node;
      // node is tail
    } else if (this.tail === node) {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
      node.next = this.head;
      // node is in middle: connect prev and next
    } else if (node.next !== null && node.prev !== null) {
      node.next.prev = node.prev;
      node.prev.next = node.next;
      node.prev = null;
      node.next = this.head;
      // node is not in the list (is not the head)
    } else if (this.head !== node) {
      this.head.prev = node;
    }

    this.head = node;
  }

  evictTail() {
    // have prev point to null and set it to this.tail
    this.tail = this.tail.prev;
    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
  }
}

class Node {
  constructor(key, val) {
    this.val = val;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.hashMap = {};
    this.dLL = new DoublyLinkedList();
  }

  get(key) {
    // if not in the hashmap return -1
    if (this.hashMap[key] === undefined) return -1;
    // else go to the linked list using the key referencing the node
    const node = this.hashMap[key];
    // set that node to the head of the DLL
    this.dLL.setHead(node);
    // return its value
    return node.val;
  }

  put(key, value) {
    // if the key already exists:
    if (this.hashMap[key] !== undefined) {
      //   find the LL node
      const node = this.hashMap[key];
      //    update its value and set it to the head
      node.val = value;
      this.dLL.setHead(node);
      // else if it doesn't exist:
    } else {
      // increment size
      this.size++;
      // create a new key-value pair, create new node
      const node = new Node(key, value);
      this.hashMap[key] = node;
      // setHead of the LL
      this.dLL.setHead(node);
      // if size > capacity,
      if (this.size > this.capacity) {
        // evict the tail of the DLL & delete the key
        this.dLL.evictTail();
        delete this.hashMap[key];
        this.size--;
      }
    }
  }
}

function printLL(LL) {
  let node = LL.head;
  while (node !== null) {
    console.log(`key: ${node.key} | val: ${node.val}`)
    node = node.next;
  }
}

let cache = new LRUCache(3);
cache.put(1, 1);
cache.put(2, 2);
// console.log(cache.get(1)) // 1. order 1 -> 2
printLL(cache.dLL) // 1 - > 2
cache.put(3, 3); // 3 -> 1 -> 2
printLL(cache.dLL) // 3 -> 1 -> 2
cache.put(4, 4); // 4 -> 3 -> 1 (evict 2)
printLL(cache.dLL) // 4 -> 3 -> 1 (evict 2)


