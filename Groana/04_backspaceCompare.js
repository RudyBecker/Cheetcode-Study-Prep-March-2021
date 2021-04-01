const typeStr = (str) => {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (letter === '#') {
      arr.pop();
    } else {
      arr.push(letter);
    }
  }

  return arr.join('');
};

const backspaceCompare = (str1, str2) => {
  return typeStr(str1) === typeStr(str2);
};

console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.log(backspaceCompare('ab##', 'c#d#')); // true
console.log(backspaceCompare('a##c', '#a#c')); // true
console.log(backspaceCompare('h##l', '#a#c')); // false
console.log(backspaceCompare('a#c', 'b')); // false
