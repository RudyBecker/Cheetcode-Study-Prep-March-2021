## Arrays: Question #1 Google Interview Question Two Sum (Easy)
```Javascript
var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        let val = target - nums[i]
        if(nums[i] in map){
            return [i, map[nums[i]]]
        }
        map[val] = i
    }
};
```

## Arrays: Question #2 Container With Most Water (Medium)
```Javascript
var maxArea = function(height) {
    let pointer1 = 0
    let pointer2 = height.length - 1
    let max = 0
    while(pointer1 < pointer2){
        let width = pointer2 - pointer1
        let h = Math.min(height[pointer1], height[pointer2])
        max = Math.max(max, h * width)
        if(height[pointer1] < height[pointer2]){
            pointer1++
        } else {
            pointer2--
        }
    }
    return max
};
```
## Arrays: Question #3 Trapping Rainwater (Hard)
```Javascript
var trap = function(height) {
    let water = 0
    if(height.length < 3){
        return 0
    }
    let left = new Array(height.length).fill(0)
    left[0] = height[0]
    for(let i = 1; i < left.length; i++){
        left[i] = Math.max(height[i], left[i - 1])
    }
    let right = new Array(height.length).fill(0)
    right[height.length - 1] = height[height.length - 1]
    for(let i = height.length - 2; i >= 0; i--){
        right[i] = Math.max(height[i], right[i + 1])
    }
    for(let i = 0; i < height.length; i++){
        water += Math.min(right[i], left[i]) - height[i]
    }
    return water
};
```
## String: Question #4 Backspace String Compare (Easy)
```Javascript
var backspaceCompare = function(S, T) {
    let s_result = ''
    let ignore = 0
    for(let i = S.length ; i >= 0 ; i--){
       if(S[i] == '#'){
           ignore++
       } else {
             if(ignore > 0){
                 ignore--
                 continue
             } else {
                 s_result += S[i]
             }
        }
    }
    let t_result = ''
    ignore = 0
    for(let i = T.length ; i >= 0 ; i--){
        if(T[i] == '#'){
           ignore++
       } else {
             if(ignore > 0){
                 ignore--
                 continue
             } else {
                 t_result += T[i]
             }
        }
    }
    return s_result == t_result
};
```
## String: Question #5 Longest Substring Without Repeating Characters (Medium)
```Javascript
var lengthOfLongestSubstring = function(s) {
    if(s.length < 1){
        return s.length
    }
    let map = {}
    let longest = 0
    let start = 0
    let i = 0
    while(i < s.length){
        if(s[i] in map){
            longest = Math.max(longest, i - start)
            start = Math.max(map[s[i]] + 1, start)
        }
        map[s[i]] = i
        i++
    }
     longest = Math.max(longest, i - start)
    return longest
};
```
## String: Question #6a Valid Palindrome(Easy)
```Javascript
var isPalindrome = function(s) {
    let a = [],
    b = s.toLowerCase().split("");
  for (let i = 0; i < b.length; i++) {
    let charCode = b[i].charCodeAt();
    if (
    charCode >= 48 && charCode <= 57 ||
     charCode>= 97 && charCode <= 122
    ) {
      a.push(b[i]);
    }
  }
  return [...a].reverse().join("") === a.join("")
};
```
## String: Question #6b Almost Palindrome (Easy)
```Javascript
var validPalindrome = function(s) {
    let pointer1 = 0
    let pointer2 = s.length - 1
    while(pointer1 < pointer2){
        if(s[pointer1] == s[pointer2]){
            pointer1++
            pointer2--
        } else {
            return isPalin(s.substring(pointer1 + 1, pointer2 + 1)) || isPalin(s.substring(pointer1, pointer2))
        }
    }
    return true
};
var isPalin = function(s){
    return s.split('').reverse().join('') == s
}
```
