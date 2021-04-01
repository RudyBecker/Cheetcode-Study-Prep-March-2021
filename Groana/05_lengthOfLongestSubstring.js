const lengthOfLongestSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      start = Math.max(start, seen[str[i]]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[str[i]] = i + 1;
  }
  return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('')); // 0
