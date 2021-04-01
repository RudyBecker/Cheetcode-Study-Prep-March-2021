const isPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let front = 0;
  let back = str.length - 1;

  while (front < back) {
    if (str[front] === str[back]) {
      front++;
      back--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome('')); // true
console.log(isPalindrome('a.')); // true
console.log(isPalindrome('ab@a')); // true
