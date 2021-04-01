### [Question #1 Google Interview Question Two Sum (Easy)](https://leetcode.com/problems/two-sum/)
``` javascript
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return [map.get(nums[i]),i]
    else map.set(target-nums[i],i)
  }
}
```

### [Question #2 Container With Most Water (Medium)](https://leetcode.com/problems/container-with-most-water/)
``` javascript
function maxArea(height) {
  let res = 0, left = 0, right = height.length - 1;
  while (left < right) {
    res = Math.max(res,Math.min(height[left],height[right])*(right - left));
    if (height[left] < height[right]) left++;
    else right--;
  }
  return res
}
```

### [Question #3 Trapping Rainwater (Hard)](https://leetcode.com/problems/trapping-rain-water/)
``` javascript
function trap(height) {
  let l = 0, r = height.length - 1, res = 0, lMax = 0, rMax = 0
  while (l < r) {
    if (height[l] < height[r]) {
      lMax = Math.max(lMax,height[l])
      res += lMax - height[l]
      l++
    } else {
      rMax = Math.max(rMax,height[r])
      res += rMax - height[r]
      r--
    }
  }
  return res
}
```

### [Question #4 Backspace String Compare (Easy)](https://leetcode.com/problems/backspace-string-compare/)
``` javascript
function BackspaceCompare(S,T){
  let newS = [], newT = []
  for (let char of S) {char === '#'? newS.pop() : newS.push(char)}
  for (let char of T) {char === '#'? newT.pop() : newT.push(char)}
  return newS.join('') === newT.join('')
}
```

### [Question #5 Longest Substring Without Repeating Characters (Medium)](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
``` javascript
function lengthOfLongestSubstring(s) {
  if (!s.length) return 0;
  let start = 0, end = 0, maxL = 0, subStr = '';
  while (end < s.length) {
    if (start < s.length && subStr.includes(s[end])) start++
    else if (!subStr.includes(s[end])) end++
    subStr = s.slice(start, end)
    maxL = Math.max(maxL,subStr.length)
  }
  return maxL
}

```

### Question #6a Valid Palindrome(Easy)](https://leetcode.com/problems/valid-palindrome/)
``` javascript
function isPalindrome(s) {
  s = s.toLowerCase().match(/[a-z0-9]+/g)
  if (!s) return true
  s = s.join('') //cannot join null
  let left = 0, right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) return false
    left++
    right--
  }
  return true
}
```

### [Question #6b Almost Palindrome (Easy)](https://leetcode.com/problems/valid-palindrome-ii/)
``` javascript
function validPalindrome(s) {
  function isPali(str,l,r) {
    while (l < r) {
      if (str[l] !== str[r]) return false
      l++
      r--
    }
    return true
  }
  let l = 0, r = s.length - 1
  while (l < r) {
    if (s[l] !== s[r]) {
      return isPali(s, l+1,r) || isPali(s, l, r-1)
    }
    l++
    r--
  }
  return true
}
```
