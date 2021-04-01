// Foind the length of the longest substring with no repeating characters

// Sliding Window
// Left and right pointer
// Running size
// Hashmaps of Chars

const longestSubstr = function (str) {
  let left = right = 0;
  const dictionary = {
    [str[left]]: 1,
  };
  let runningLongest = 0;
  let repeatedCharsInWindow = 0;

  while (right < str.length && left <= right) {
    // Check if the current dictionary is valid - no chars with > 1 appearance
    if (repeatedCharsInWindow === 0) {
      // If valid, evaluate max of right-left +1 = the size of the substr VS running Longest substring
      runningLongest = Math.max(right-left+1, runningLongest);
      // iterate right and add char to dictionary
      right++;
      dictionary[str[right]] = (dictionary[str[right]] || 0) + 1;
      if (dictionary[str[right]] === 2) repeatedCharsInWindow++;

    // else don't have a valid substr
    } else {
      // decrement the values at the dictionary key of the char at the left index
      dictionary[str[left]]--;
      if (dictionary[str[left]] === 1) repeatedCharsInWindow--;
      // destroy if 0
      if (dictionary[str[left]] === 0) delete dictionary[str[left]];
      // then we can increment left
      left++;
    }
  }

  return runningLongest;
}

console.log(longestSubstr('abcabcbb')) // 3
console.log(longestSubstr('abb')) // 2
console.log(longestSubstr('bbbbbbbb')) // 1
