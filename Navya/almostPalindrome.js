var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] != s[right]) {
      return (
        isValidPalindrome(s, left + 1, right) ||
        isValidPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

var isValidPalindrome = function (str, left, right) {
  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

//Time: O(n)
//Space: O(1)
