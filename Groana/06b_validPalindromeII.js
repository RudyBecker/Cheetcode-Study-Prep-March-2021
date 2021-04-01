/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (str, front, back) => {
  while (front < back) {
    if (str[front] !== str[back]) {
      return false;
    }
    front++;
    back--;
  }
  return true;
};

const isPalindromeII = (str) => {
  let front = 0;
  let back = str.length - 1;

  while (front < back) {
    if (str[front] !== str[back]) {
      return (
        isPalindrome(str, front + 1, back) || isPalindrome(str, front, back - 1)
      );
    }
    front++;
    back--;
  }
  return true;
};

console.log(isPalindromeII('race a car')); // true
console.log(isPalindromeII('abccdba')); // true
console.log(isPalindromeII('abcdefdba')); // false
console.log(isPalindromeII('aba')); // true
console.log(isPalindromeII('')); // true
console.log(isPalindromeII('a')); // true
console.log(isPalindromeII('ab')); // true
console.log(isPalindromeII('abca')); // true
