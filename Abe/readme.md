## Question #1 Google Interview Question Two Sum (Easy) 

```python
from collections import defaultdict
class Solution(object):
    def twoSum(self, nums, target):
        
        location = defaultdict(list)
        
        for index, value in enumerate(nums):
            location[value].append(index)

        nums.sort()
        
        left = 0
        right = len(nums) - 1
        
        while left < right:
            
            current = nums[left] + nums[right]
        
            if current == target:
                left = location[nums[left]].pop()
                right =  location[nums[right]].pop()
                return [left, right]    
            
            if current > target:
                right -= 1
            else:
                left += 1
        
        
```

## Question #2 Container With Most Water (Medium)

```python 
class Solution(object):
    def maxArea(self, height):
        max_area = 0
        left = 0
        right = len(height) -1
        
        while left < right:
            current_min = min(height[left], height[right])
            current_area = current_min * (right - left)
            max_area = max(current_area, max_area)
            
            # Choose biggest pointer
            if height[left] <= height[right]:
                left += 1
            elif height[left] > height[right]:
                right -= 1
                
        return max_area
```

## Question #3 Trapping Rainwater (Hard) 

```python
    class Solution(object):
        def trap(self, height):
            left_pointer = 0
            right_pointer = len(height) - 1
            
            current_sum = 0
            left_max = 0
            right_max = 0
            
            while left_pointer <= right_pointer:
                if left_max <= right_max:
                    left_max = max(left_max, height[left_pointer])
                    current_sum += left_max - height[left_pointer]
                    left_pointer += 1
                    
                if left_max > right_max:
                    right_max = max(right_max, height[right_pointer])
                    current_sum += right_max - height[right_pointer]
                    right_pointer -= 1
                    
            return current_sum
```

## Question #4 Backspace String Compare (Easy) 
```python
def backspace_compare(str1, str2):
  # use two pointer approach to compare the strings
  index1 = len(str1) - 1
  index2 = len(str2) - 1
  while (index1 >= 0 or index2 >= 0):
    i1 = get_next_valid_char_index(str1, index1)
    i2 = get_next_valid_char_index(str2, index2)
    if i1 < 0 and i2 < 0:  # reached the end of both the strings
      return True
    if i1 < 0 or i2 < 0:  # reached the end of one of the strings
      return False
    if str1[i1] != str2[i2]:  # check if the characters are equal
      return False

    index1 = i1 - 1
    index2 = i2 - 1

  return True


def get_next_valid_char_index(str, index):
  backspace_count = 0
  while (index >= 0):
    if str[index] == '#':  # found a backspace character
      backspace_count += 1
    elif backspace_count > 0:  # a non-backspace character
      backspace_count -= 1
    else:
      break

    index -= 1  # skip a backspace or a valid character

  return index

```

## Question #5 Longest Substring Without Repeating Characters (Medium) 

```python

from collections import defaultdict


class Solution(object):

    def lengthOfLongestSubstring(self, s):
        solution = 0
        locations = defaultdict(int)

        left = 0
        for right in range(len(s)):
            current = s[right]

            if current in locations:
                left = max(locations[current] + 1, left)

            solution = max(solution, right - left + 1)

            locations[current] = right

        return solution
```

## Question #6a Valid Palindrome(Easy) 

```python
def is_palindrome(s: str) -> bool:
    """Check if string is palindrome."""
    i, j = 0, len(s) - 1

    while i < j:
        while i < j and not s[i].isalnum():
            i += 1
        while i < j and not s[j].isalnum():
            j -= 1

        if s[i].lower() != s[j].lower():
            return False
        i += 1
        j -= 1

    return True
```
