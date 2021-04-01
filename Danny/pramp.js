// Find the length of the longest substring with no repeating characters

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

// console.log(longestSubstr('abcabcbb')) // 3
// console.log(longestSubstr('abb')) // 2
// console.log(longestSubstr('bbbbbbbb')) // 1

// Generate All Valid Bracket Permutations given an integer representing the total number of bracket pairs to return
// Return the result as a string

const generateValidBrackets = function(n) {
  if (!n) return [];
  const queue = [];
  queue.push({'brackets': ['('], 'unclosedBrackets': 1})
  for (let i = 0; i < 2*n-1; i++) {
    const queueLen = queue.length;
    for (let j = 0; j < queueLen; j++) {
      const perm = queue.shift();
      if (perm.unclosedBrackets === 0) {
        perm.brackets.push('(');
        perm.unclosedBrackets++;
        queue.push(perm);
      } else if (2*n - perm.brackets.length === perm.unclosedBrackets) {
        perm.brackets.push(')');
        perm.unclosedBrackets--;
        queue.push(perm);
      } else {
        const perm1 = {brackets: [...perm.brackets, '('], 'unclosedBrackets': perm.unclosedBrackets+1}
        const perm2 = {brackets: [...perm.brackets, ')'], 'unclosedBrackets': perm.unclosedBrackets-1}
        queue.push(perm1);
        queue.push(perm2);
      }
    }
  }
  const validBrackets = []
  for (let i = 0; i < queue.length; i++) {
    validBrackets.push(queue[i].brackets.join(''))
  }
  return validBrackets;
}

// const example1 = generateValidBrackets(1); // ()
// const example2 = generateValidBrackets(2); // ()(), (())
// const example3 = generateValidBrackets(3); // ()()(), (()()), ((())), (())(), ()(())

// console.log(example1)
// console.log(example2)
// console.log(example3)

// Implemented Recursively

const generateRecursedBrackets = function(n) {
  if (!n) return [];
  const validBrackets = [];
  generateBrackets(validBrackets, n, '(', 1);

  return validBrackets;
}

const generateBrackets = function(validBrackets, n, permutation, unclosedBrackets) {
  if (permutation.length === n * 2) {
    validBrackets.push(permutation);
    return;
  }

  // 3 cases: add an opening bracket, add a closing bracket, or add both
  if (unclosedBrackets === 0) {
    // open
    generateBrackets(validBrackets, n, permutation+'(', unclosedBrackets+1)
  } else if (n * 2 - permutation.length === unclosedBrackets) {
    //close
    generateBrackets(validBrackets, n, permutation+')', unclosedBrackets-1)
  } else {
    // both
    generateBrackets(validBrackets, n, permutation+'(', unclosedBrackets+1)
    generateBrackets(validBrackets, n, permutation+')', unclosedBrackets-1)
  }
}

const example1 = generateRecursedBrackets(1); // ()
const example2 = generateRecursedBrackets(2); // ()(), (())
const example3 = generateRecursedBrackets(3); // ()()(), (()()), ((())), (())(), ()(())

console.log(example1)
console.log(example2)
console.log(example3)
