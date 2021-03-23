class Solution(object):
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        """

        l = len(height)
        total_area = 0
    
        left = 0
        right = l - 1
        left_max = right_max = 0

        while(left<right):

            if left < right:
                if height[left] >= left_max:
                    left_max = height[left]
                else:
                    total_area = total_area + (left_max - height[left])
                left = left + 1

            else:
                if height[right] >= right_max:
                    right_max = height[right]
                else:
                    total_area = total_area + (right_max - height[right])
                right = right - 1 
            
        return total_area


def main():
    sol = Solution()
    height = [0,1,0,2,1,0,1,3,2,1,2,1]
    # height = [4,3,2,1,4]
    print(sol.trap(height))

if __name__ == "__main__":
    print ('Calling main')
    main()