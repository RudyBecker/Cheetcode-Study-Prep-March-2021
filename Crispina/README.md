# Question #1 Google Interview Question Two Sum (Easy)

## JavaScript

```
var twoSum = function(nums, target) {
    // create a dictionary
    const dict = new Map();

    // loop through array
    for(let i = 0; i < nums.length; i++) {
        const currentVal = nums[i];
    // subtract one value from main target
        const remainder = target - currentVal;
    // make a check if it's availible
        // if it's a match then
        if(dict.has(remainder)) {
            return [dict.get(remainder) ,i];
        } else {
        // store value as key and index as a value
            dict.set(currentVal, i);
        }
    }
    return -1;
};
```

# Question #2 Container With Most Water (Medium)

```
var maxArea = function(height) {
//the two tallest (biggest integers)
// going through every single pair calulcate thea area
//loop through array
// use a hash map to keep , no need for hash map
// subtraction with the left and right
// area = smallest of (leftValue, rightValue) * (right-left)
let left =0;
let right =height.length-1;
let areaMax =0;

while(left < right){
  areaMax = Math.max(areaMax, Math.min(height[left], height[right]) * (right-left))
  if(height[left]<height[right]){
    left++;
  }
  else {
    right--;
  }
}


return areaMax;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7] )=== 49)

console.log(maxArea([1,1] )=== 1)

console.log(maxArea([4,3,2,1,4] )=== 16)


console.log(maxArea([1,2,1] )=== 2)
```

# Question #3 Trapping Rainwater (Hard)

```
var trap = function(height) {
    let count = 0;
    //start from the first >0 number, go to the last >0 number
    for(let i = 0; i < height.length; i++){
        // look for lower numbers after initial non zero number
        // if next number is lower, we count
        const curr = height[i];
        const next = height[i+1];
        const diff = curr - next;

        // count the diff between current value and last

        // add diff to count
        if(diff > 0) count += diff;

    }
  // return count
    return count;

};
```

# Question #4 Backspace String Compare (Easy)
```
var backspaceCompare = function(S, T) {

    const removeB = (str) => {
        let result = '';
        for(let i = str.length; i >= 0; i--) {
            if(str[i]  === '#') i--;
            else result += str[i];
        }
        return result;
    }
    S = removeB(S);
    T = removeB(T);

    return S === T;
};
```

# Question #5 Longest Substring Without Repeating Characters (Medium)
```
var lengthOfLongestSubstring = function(s) {
    // s is a string
    // find longest substring without a repeat

    // keep a count of each element you pass without repeat
    let maxLength = 0;

    // keep an array of chars you've seen
    let dict = [];

    // loop through
    for(let i = 0; i < s.length; i++) {
        // use .includes to check if you've seen that char before
        if(dict.includes(s[i])) {
            if(dict.length > maxLength) maxLength = dict.length;

            // if you have seen the element reset the array
            dict = [];
        }
        dict.push(s[i]);
    }
    return maxLength;
};
```
# Question #6a Valid Palindrome(Easy)
```
var isPalindrome = function(s) {
    // determine if string s is a palindrome ignoring cases, and spaces

    //clean the string
    s = s.split(' ').join('').split(',').join('').split(':').join('').toLowerCase();
    console.log(s);
    //two pointer solution
    let left = 0;
    let right = s.length - 1;

    while (left !== right) {
        if(s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
```
# Question #6b Almost Palindrome (Easy)

```
// create helper function that tests if given string is palindrome
const isTruePalindrome = function(s, p1, p2) {
  while (p1 < p2) {
    if (s[p1] !== s[p2]) return false;
    p1++;
    p2--;
  }

  return true;
}

// leetcode function
const validPalindrome = function(s) {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    //call helper function passing in string and indices to check deleted elements (skipping over 1 index)
    if (s[p1] !== s[p2]) return isTruePalindrome(s, p1 + 1, p2) || isTruePalindrome(s, p1, p2 - 1);
    p1++;
    p2--;
  }

  return true;
}
```
