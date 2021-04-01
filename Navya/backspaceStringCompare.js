var backspaceCompare = function (S, T) {
  let sArr = [];
  let tArr = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "#") {
      sArr.pop();
    } else {
      sArr.push(S[i]);
    }
  }
  for (let j = 0; j < T.length; j++) {
    if (T[j] === "#") {
      tArr.pop();
    } else {
      tArr.push(T[j]);
    }
  }
  sArr = sArr.toString();
  tArr = tArr.toString();

  return sArr === tArr;
};

//Time: O(n)
//Space: O(n)
