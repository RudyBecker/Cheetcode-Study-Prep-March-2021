## 1. Two Sum

```js
// Time: O(N) | Space: O(N)
const twoSum = function(nums, target) {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (dict[diff] !== undefined) {
            return [dict[diff], i]
        } else {
            dict[nums[i]] = i;
        }
    }
};
```

## 3. Two Sum III – Data structure design

Design and implement a TwoSum class. It should support the following operations: add and find.

add(input) – Add the number input to an internal data structure.

find(value) – Find if there exists any pair of numbers which sum is equal to the value.

```js
class TwoSum {
  constructor() {
    this.hash = {}
  }
  add(input) {
    this.hash[input] = (this.hash[input] || 0) + 1;
  }
  find(value){
    for (let key in this.hash) {
      const compliment = value - key;
      if (key === compliment && this.hash[key] >= 2) {
        return true;
      }
      else if (this.hash[compliment]) {
        return true;
      }
    }
    return false;
  }
}
```

## 5. Implement strstr
Needle In Haystack problem

Brute Force Time: O(nm) | Space: O(1)
```js
const strstr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length-needle.length; i++) {
    let n = 0, h = i;
    while (haystack[h] === needle[n]) {
      h++;
      n++;
      if (n === needle.length) return i;
    }
  }

  return -1
}
```

## Reverse Words In A String

One Pass Solution: Time: O(N) | Space: O(N)

Handle more edge cases when you review.
```js
const reverseWords = (s) => {
  let result = '';
  let wordEnd = s.length;

  for(let i = s.length -1; i >= 0; i--) {
      let wordBegin = s[i];
      if(wordBegin == ' ') {
        result += s.slice(i + 1, wordEnd) + " ";
        wordEnd = i;
      } else if (i === 0) {
        result += s.slice(i, wordEnd)
      }
  }
  return result;
}
```
