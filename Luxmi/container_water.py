
class Solution(object):
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




    def maxAreaBruteForce(self, height):
        """
        :type height: List[int]
        :rtype: int
        """

        maxA = 0
        hi = 0
        hj = 1
        for i in range(0,len(height)):
            for j in range(i+1,len(height)):
                area = height[i]*(abs(j-i)) if height[i] <= height[j] else height[j]*(abs(j-i))
                if (area > maxA):
                    maxA = area

        return maxA


def main():
    sol = Solution()
    height = [1,8,6,2,5,4,8,3,7]
    # height = [4,3,2,1,4]
    print(sol.maxArea(height))

if __name__ == "__main__":
    print ('Calling main')
    main()