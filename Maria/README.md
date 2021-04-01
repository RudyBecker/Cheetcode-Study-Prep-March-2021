## Two Sum (EASY)
```Javascript
function twoSum (nums, target) {
    let result = []
    let leftPointer = 0
    let rightPointer = nums.length-1
    
    nums.sort((a,b)=> (a-b))
   
    while (leftPointer < rightPointer){
        let sum = nums[leftPointer] + nums[rightPointer]
        if (sum > target){
            rightPointer--
        }else if (sum < target){
            leftPointer++
        }else if (sum === target){
            result.push(leftPointer)
            result.push(rightPointer)
            return result
        }
    }
};
```
## Container With Most Water (MEDIUM)
## Trapping Rainwater (HARD)
## Typed Out Strings (EASY)
## Longest Substring Without Repeating Characterts (MEDIUM)
## Valid Palindrome (EASY)
```Javascript
function isPalindrome(str) {
    let onlyLetters = ''
    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if (char.toLowerCase() !== char.toUpperCase()){
            onlyLetters += char 
        }
    }
    
    return onlyLetters.toLowerCase() === onlyLetters.split("").reverse().join("").toLowerCase()
};
```
## Almost Palindrome (EASY)
