(Two sum)[https://leetcode.com/problems/two-sum/]
Unsorted array

        dict_nums = {}
        i = 0
        for n in nums:
            if (target-n) not in dict_nums:
                dict_nums[n] = i
            else:
                return i, dict_nums[target-n]
            i = i+1
        return None

Sorted Array

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


(Container with most water)[https://leetcode.com/problems/container-with-most-water/] 

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