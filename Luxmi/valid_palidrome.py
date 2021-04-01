class Solution(object):
    def isPalindrome1(self, s):
        """
        :type s: str
        :rtype: bool
        """

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



def main():
    sol = Solution()
    s = 'malayalam'
    s = "A man, a plan, a canal: Panama"
    s = ",."
    s = 'acbda'
    # s = 'abba'
    print(sol.isPalindrome(s))


if __name__ == "__main__":
    print ('Calling main')
    main()

