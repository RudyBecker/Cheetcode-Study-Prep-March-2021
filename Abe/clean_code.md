# Two Sum

```python
from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        # build a hashtable (by using dictionary)
        # note: just store the index (because we need to return the indices)
        my_dict = {}
        for index in range(len(nums)):
            my_dict[nums[index]] = index
        print(my_dict)

        # note: my_target is the complementary number
        # just check out if my_target is in the dictionary!!
        for index in range(len(nums)):
            my_target = target - nums[index]
            if my_target in my_dict:
                # be careful: you may not use the same element twice!!!
                if index == my_dict[my_target]:
                    pass
                else:
                    return [index, my_dict[my_target]]
```
# Two Sum II
```
from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:

        # build a hash table (by using dictionary)
        my_dict = {}
        for index in range(len(numbers)):
            my_dict[numbers[index]] = index

        # find the complementary number (and its index)
        for index in range(len(numbers)):
            my_target = target - numbers[index]
            if my_target in my_dict:
                # note: you may not use the same element twice
                if index == my_dict[my_target]:
                    pass
                # note: both index1 and index2 are not zero-based.
                else:
                    # return [index, my_dict[my_target] ]
                    return [index + 1, my_dict[my_target] + 1]
                    # be careful: we need to plus '1' because they are 'not' zero-based!!
```
# Two Sum III

```python
no need
```
# Valid Palindrome
```python
class Solution:
    def isPalindrome(self, s: str) -> bool:

        # 1st loop: build my_str only with 'alpha' and 'num' (skip other characters)
        # note: 'alphanumeric' means 'alpha' and 'num'
        my_str = []
        for char in s:
            if char.isalpha() or char.isalnum():
                my_str.append(char)
        print(my_str)

        # important:
        # if my_str is an 'empty string' is also a valid palindrome
        if len(my_str) == 0:
            return True

        # O(n), using two pointers (head and tail)
        left_pointer = 0
        right_pointer = len(my_str) - 1

        # note: the condition is 'left < right'
        while left_pointer < right_pointer:
            if my_str[left_pointer].lower() == my_str[right_pointer].lower():
                pass
            else:
                return False
            left_pointer += 1
            right_pointer -= 1
        # be careful: ignoring cases, so we use '.lower()'

        return True
```
# Implement STRSTR()
# Reverse words in a string
```python
class Solution(object):
    def reverseWords(self, s):
        myword = s.split(" ")
        myword = myword[::-1]

        solution = ""
        for word in myword:

            solution += word.strip()
            if word.strip():
                solution += " "

        return solution.strip()

```
# Reverse words in a string II
# String to Integer (ATOI)
```python
class Solution(object):
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        if len(str) == 0:
            return 0
        ls = list(str.strip())
    
        if not ls:
            return 0
        
        sign = -1 if ls[0] == '-' else 1
        res, i = 0, 0

        if ls[0] in ['-','+'] : del ls[0]
            
        while i <= len(ls) - 1 and ls[i].isdigit():
            res = res * 10 + ord(ls[i]) - ord('0')
            i += 1
        return max(-2**31, min(2**31 - 1, res * sign))
```
# Valid Number
```python
class Solution:

    def isNumber(self, s: str) -> bool:

        # important: use the method str.strip()
        # to handle the 'heading and trailing whitespace'
        ##################
        my_test_str = '3.'
        print(my_test_str)
        my_test_str = my_test_str.strip()  # trim
        # my_test_str = my_test_str.lstrip() #ltrim (left)
        # my_test_str = my_test_str.rstrip() #rtrim (right)
        print(my_test_str)
        ##################

        my_s = s.strip()

        # without heading and trailing whitespace, then ...
        if my_s == '':
            return False
        if my_s == '.':
            return False

        # handle the sign
        i = 0
        if my_s[i] == '+' or my_s[i] == '-':
            i += 1

        # print(i)
        # print(my_str[i:])

        # check if the string is a valid number or not
        my_s_is_valid_number = False
        while i < len(my_s):
            if my_s[i].isdigit() == True:
                my_s_is_valid_number = True
                i += 1
            elif my_s[i] == '.':
                my_s_is_valid_number = True
                i += 1

                if i == len(my_s):
                    return True

                # the second loop: to check the chars after '.'
                while i < len(s):
                    if my_s[i].isdigit() == True:
                        my_s_is_valid_number = True
                        i += 1
                    else:
                        return False
            else:
                return False

            # final return
        return my_s_is_valid_number
```
# Longest Substring without repeating Characters

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
# Longest Substring with at Most Two Distinct Characters
```python
from collections import defaultdict
class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: 'str') -> 'int':
        n = len(s)
        if n < 3:
            return n

        # sliding window left and right pointers
        left, right = 0, 0
        # hashmap character -> its rightmost position
        # in the sliding window
        hashmap = defaultdict()

        max_len = 2

        while right < n:
            # when the slidewindow contains less than 3 characters
            hashmap[s[right]] = right
            right += 1

            # slidewindow contains 3 characters
            if len(hashmap) == 3:
                # delete the leftmost character
                del_idx = min(hashmap.values())
                del hashmap[s[del_idx]]
                # move left pointer of the slidewindow
                left = del_idx + 1

            max_len = max(max_len, right - left)

        return max_len
```
# Missing Ranges

```python
def findMissingRanges(self, nums: List[int], lower: int, upper: int) -> List[str]:
    res = []

    prev = lower - 1  # so that I can handle case when nums is empty
    for i in range(len(nums) + 1):
        current = nums[i] if i < len(nums) else upper + 1

        # means, not a continuos range where current number
        # is 1 greater than the last number in the list
        if current > prev + 1:
            # now my missing intervals will have number prev+1, current-1
            # I can't take the number already present in the list
            # that means, prev and current can't be part of my answer
            if prev + 1 < current - 1:
                res.append(str(prev + 1) + "->" + str(current - 1))
            else:
                res.append(str(prev + 1))

        prev = current

    return res
```

# Longest Palindromic Substring

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        
        n = len(s)
        # Form a bottom-up dp 2d array
        # dp[i][j] will be 'true' if the string from index i to j is a palindrome. 
        dp = [[False] * n  for _ in range(n)]
        
        ans = ''
        # every string with one character is a palindrome
        for i in range(n):
            dp[i][i] = True
            ans = s[i]
            
        maxLen = 1
        for start in range(n-1, -1, -1):
            for end in range(start+1, n):             
				# palindrome condition
                if s[start] == s[end]:
                    # if it's a two char. string or if the remaining string is a palindrome too
                    if end - start == 1 or dp[start+1][end-1]:
                        dp[start][end] = True
                        if maxLen < end - start + 1:
                            maxLen = end - start + 1
                            ans = s[start: end+ 1]
        
        return ans
```
# One Edit Distance
```python
class Solution(object):
    def isOneEditDistance(self, s, t):
        if s == t:
            return False

        l1, l2 = len(s), len(t)

        if l1 > l2:  # force s no longer than t
            return self.isOneEditDistance(t, s)

        if l2 - l1 > 1:
            return False

        for i in range(len(s)):
            if s[i] != t[i]:

                if l1 > l2:
                    s = s[:i] + s[i + 1:]  # deletion
                elif l1 == l2:
                    s = s[:i] + t[i] + s[i + 1:]  # replacement
                else:
                    s = s[:i] + t[i] + s[i:]  # insertion
                return s == t or s == t[:-1]
        return True
```


# Read N Characters Given Read4
# Read N Characters Given read4 call multiple times


```python
class Solution(object):
    
    def __init__(self):
        self.temp_buf = [""] * 4
        self.offset = 0
        self.temp_available = 0
        
    def read(self, buf, n):
        total_read = 0
        eof = False
        
        while total_read < n and not eof:
           
            # keep reading
            if self.temp_available == 0:
                self.temp_available = read4(self.temp_buf)
            
                if self.temp_available < 4:
                    eof = True
            
            # lets update our temp_buf
            should_read = min(self.temp_available, n - total_read)
            
            for i in range(should_read):
                buf[total_read + i] = self.temp_buf[self.offset + i]
                
            
            total_read += should_read
            self.offset = (self.offset + should_read) % 4
            self.temp_available -= should_read
        
        return total_read
 ```       
# Reverse Integer
# Plus One
# Palindrome Number

```python
class Solution:
    # @param x, an integer
    # @return a boolean
    def isPalindrome(self, x):
        if x < 0:
            return False

        ranger = 1
        while x / ranger >= 10:
            ranger *= 10

        while x:
            left = x / ranger
            right = x % 10
            if left != right:
                return False

            x = (x % ranger) / 10
            ranger /= 100

        return True
```
# Merge Two Sorted Lists
# Add Two Numbers
# Swap Nodes in Pairs
# Merge K Sorted Linked Lists
# Copy List with Random Pointer
# Valid Binary Search Tree
# Maximum Depth of a Binary Tree
# Minimum Depth of a Binary Tree
# Balanced Binary Tree
# Convert Sorted Array to Balanced Binary Search Tree
# Convert Sorted List to Balanced Binary Search Tree
# Binary Tree Maximum Path Sum
# Binary Tree Upside Down
# Single Number
# Single Number II
# Spiral Matrix
# Integer to Roman
# Roman to Integer
# Clone Graph
# Climbing Stairs
# Unique Paths
# Unique Paths II
# Maximum Sum Subarray
```python
class Solution(object):
    def maxSubArray(self, nums):
        # greedy approach
        # 1. current or current_sum + current
        # 2. update local max.
        
        curr_sum = nums[0]
        max_sum = nums[0]
        
        for number in nums[1:]:
            curr_sum = max(number, curr_sum + number)
            max_sum = max(max_sum, curr_sum)
        
        return max_sum
                
```

# Maximum Products Subarray

input = [2,3,-2,4], 
solution= 6 because  [2,3] has the largest product = 6.

Same as the above but keep track of the largest and the smallest product. 

```python

class Solution:
    """ 
    Keep track of the maximum so far and the min_sofar 
    """
    def maxProduct(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        max_so_far = nums[0]
        min_so_far = nums[0]
        result = max_so_far

        for number in nums[1:]:
           
            temp_max = max(number, max_so_far * number, min_so_far * number)
            min_so_far = min(number, max_so_far * number, min_so_far * number)

            max_so_far = temp_max

            result = max(max_so_far, result)

        return result

```


# Coins in a Line

# Search Insert Position
# Find Minimum in Sorted rotated Array
# Find Minimum in rotated sorted Array II (with duplicates)
