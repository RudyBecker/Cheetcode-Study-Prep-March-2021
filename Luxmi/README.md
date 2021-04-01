###  1. [Two sum](https://leetcode.com/problems/two-sum/)
    Unsorted array
```
        dict_nums = {}
        i = 0
        for n in nums:
            if (target-n) not in dict_nums:
                dict_nums[n] = i
            else:
                return i, dict_nums[target-n]
            i = i+1
        return None
```

    Sorted Array

```
        i = 0
        j = len(nums) - 1

        while(i < j):
            sum = nums[i] + nums[j]
            if sum == target:
                return i,j
            elif sum > target:
                j = j-1
            elif sum < target:
                i = i+1


        return None
```
---
###    2. [Container with most water](https://leetcode.com/problems/container-with-most-water/) 

```
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """

        i = 0
        l = len(height)
        j = l - 1
        maxA = 0
        while(i<l and j>i):
            if (height[i]< height[j]):
                area = height[i]*abs(j-i)
                i = i+1
            else:
                area = height[j]*abs(j-i)
                j = j-1
            print(area)
            if maxA < area:
                maxA = area

        return maxA
        
```
---
###    3. [Trapping Water](https://leetcode.com/problems/trapping-rain-water/)


    

    **************************************

---
###    4. [Backspace string compare](https://leetcode.com/problems/backspace-string-compare/)

```
    class OpStack(object):
        def __init__(self):
            self.arr = []

        def pop(self):
            l = len(self.arr)
            if l != 0:
                r = self.arr[l-1]
                # self.arr.remove(r)
                self.arr.pop(l-1)
                return r
            return None

        def peek(self):
            l = len(self.arr)
            if l != 0:
                r = self.arr[l-1]
                return r
            return

        def push(self, value):
            self.arr.append(value)

        def traverse(self):
            print (self.arr)

        def length(self):
            return len(self.arr)

        def isEmpty(self):
            return self.length() == 0

        def generateString(self):
            str = ''
            l = len(self.arr)
            if l != 0:
                for c in self.arr:
                    str = str + c
            return str

    
    def backspaceCompare(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: bool
        """

        if self.backspaceString(S).generateString() == self.backspaceString(T).generateString():
            return True
        return False

    def backspaceString(self, str):
        op = OpStack()
        for c in str:
            if c == '#':
                op.pop()
            else:
                op.push(c)


        return op
```
---

###    5. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

```
    if s is None or not s:
            return 0

    l = len(s)

    i = 0
    
    longest_string = s[0]
    while(i<l-1):
        j = i+1
        while ((j < l) and (s[j] not in s[i:j])):
            j = j+1

        temp_str = s[i:j]
        if len(temp_str) > len(longest_string):
            longest_string = temp_str
        i = i+1
        print(longest_string)

    return len(longest_string)
```

---

###    6a. [Valid Palindrome (with special characters)](https://leetcode.com/problems/valid-palindrome)

```
    lower_s = s.lower()

    l = len(lower_s)

    i = 0
    j = l - 1

    while(i<j):
        while(i<j and not lower_s[i].isalnum()):
            i = i+1
        while(i<j and not lower_s[j].isalnum()):
            j = j-1


        if lower_s[i] != lower_s[j]:
            return False

        i = i+1
        j = j-1


    return True
```
---

###    6b. [Valid Palindrome (with one character deletion)](https://leetcode.com/problems/valid-palindrome-ii/)
```
    def isPalindrome(self,s):

        isValid = 0

        return self.checkPalindrome(s, 0, len(s) - 1, isValid)



    def checkPalindrome(self,s, start, end, isValid):
        if start >= end:
            return True
        elif s[start] == s[end] and isValid <=1:
            return self.checkPalindrome(s, start+1, end -1, isValid)
        else:
            isValid = isValid+1

        if isValid <= 1:
            return self.checkPalindrome(s, start+1, end, isValid) or self.checkPalindrome(s, start, end -1, isValid)
        else:
            return False 

```
---
