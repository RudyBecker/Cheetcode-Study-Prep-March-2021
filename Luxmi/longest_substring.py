class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """

        
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
            

def main():
    sol = Solution()
    s = "abcabcbb"
    s = "bbbbb"
    s = "pwwkew"
    # s = ""
    print(sol.lengthOfLongestSubstring(s))


if __name__ == '__main__':
    main()