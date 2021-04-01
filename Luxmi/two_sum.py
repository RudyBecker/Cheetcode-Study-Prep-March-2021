from collections import defaultdict

class Solution(object):
    def twoSumUnsorted(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        dict_nums = {}
        i = 0
        for n in nums:
            if (target-n) not in dict_nums:
                dict_nums[n] = i
            else:
                return i, dict_nums[target-n]
            i = i+1
        return None


    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

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

            




def main():
    sol = Solution()
    nums = [2,7,11,15]
    target = 9
   
    print(sol.twoSum(nums, target))

if __name__ == "__main__":
    print ('Calling main')
    main()