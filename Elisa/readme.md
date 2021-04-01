ARRAYS
## Question #1 Google Interview Question Two Sum (Easy)
``` Javascript


// Naive Solution

const twoSum = (nums, target) => {
  let result = []
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				result.push(i,j);
			}
		}
	}
	return result;
}
```
// Optimized Solution
```Javascript
const twoSum = (nums, target) =>  {
  let map = {}

   for(let i=0; i<nums.length; i++){
     let thisNum = nums[i]
     map[thisNum] = i;
   }

   for(let i=0; i<nums.length; i++){
     let difference = target-nums[i]
     if(map.hasOwnProperty(difference) && map[difference] !== i){
       return [i, map[difference]]
     }
   }
```
## Question #2 Container With Most Water (Medium)
```Javascript
const maxArea = (array)=> {
  let pointer1 = 0
  let pointer2 = array.length -1
  let maxArea = 0

  while (pointer1 < pointer2) {
    let width =  pointer2 - pointer1
    let height = Math.min(array[pointer1], array[pointer2])
    maxArea = Math.max(width * height, maxArea)

     if (array[pointer1] < array[pointer2]) {
       pointer1++
     } else {
       pointer2--
     }
  }
return maxArea
};
```
## Question #3 Trapping Rain Water (Hard)
```Javascript
const trapRain = (array) => {
 if (height === null || height.length < 3) return 0

  let leftMax= []
  leftMax[0] = height[0]

  for (let i=1; i<height.length; i++){
    leftMax[i] = Math.max(leftMax[i-1], height[i])
  }

  let rightMax= []
  rightMax[height.length-1] = height[height.length -1]
  for( let i= height.length -2; i >= 0; i--){
    rightMax [i] = Math.max(rightMax[i+1], height[i])
  }

  let waterSum=0
  for (let i=0; i<height.length ; i++){
    let currentHold = Math.min(leftMax[i], rightMax[i]) - height[i]
    waterSum += currentHold
  }
  return waterSum

}
```
STRINGS
## Question #4 Backspace String Compare (Easy)
```Javascript
const backSpace = (string1, string2) => {
  const trim = (string) => {
    let stack = []

    for (let char of string){
      if (char !== '#') {
        stack.push(char)
      } else {
        stack.pop()
      }
    }
    return stack.join('')
  }
  return trim(string1) === trim(string2)
}
```
## Question #5 Longest Substring Without Repeating Characters (Medium)
```Javascript
const longestSubstring = (string) => {
  let left = 0
  let right = 0
  let maxLength = 0
  let set = new Set()

  while(right < string.length) {
       if(!set.has(string.charAt(right))){
           set.add(string.charAt(right))
           maxLength = Math.max(maxLength, set.size)
           right ++
       } else {
           set.delete(string.charAt(left))
           left++
       }
  }
    return maxLength
}
```
## Question #6a Valid Palindrome(Easy)

Naive
```Javascript
const isPalindrome = (string) => {
  string= string.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  let array = s.split('').reverse().join('')

  return s === array
}
```
```Javascript
cons isPalindrome = (string) => {
  string= string.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
  let newString = ""

  for (let i=string.length-1; i>=0 : i--){
    newString += string[i]
  }

  return s === newString
}
```
Optimized
```Javascript
const isPalindrome =(string) => {
    string= string.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let leftIdx = 0;
    let rightIdx = string.length - 1;

    while(leftIdx < rightIdx){
        if (string[leftIdx] !== string[rightIdx]) return false

        rightIdx --
        leftIdx ++

    }
    return true
}
```
## Question #6b Almost Palindrome (Easy)
```Javascript
const almostPalindrome = (string) => {

}
```
