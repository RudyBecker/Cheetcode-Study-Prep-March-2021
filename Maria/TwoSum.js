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