var lengthOfLongestSubstring = function (s) {
  let pointer = 0;
  let maxLength = 0;
  let memo = {};
  //sliding window technique
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const prev = memo[current];
    if (prev >= pointer) {
      pointer = prev + 1;
    }
    memo[current] = i;
    maxLength = Math.max(maxLength, i - pointer + 1);
  }
  return maxLength;
};

//Time: O(n)
//Space: O(n)
