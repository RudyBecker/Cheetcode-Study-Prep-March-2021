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



class Solution(object):
    
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




def main():
    sol = Solution()
    S = "ab#c"
    T = "ad#c"
    S = "oi###mupo##rszty#s#xu###bxx##dqc#gdjz"

    # murszbdqgdjz


    T = "oi###mu#ueo##pk#o##rsztu#y#s#xu###bxx##dqc#gz#djz"

    # murszbdqgdjz         


    print(sol.backspaceCompare(S,T))



if __name__ == "__main__":
    print ('Calling main')
    main()
