function getIndexsForPalindrome(word) {
  let mid = Math.round(word.length / 2);
  let res = [];
  let res2 = [];
  let isPalidrome = false;

  for (const i of Array.from({ length: mid }).keys()) {
    let end = word.length - 1 - i;
    if (word[i] !== word[end]) {
      res.push(i);
      res2.push(end);
    }
  }

  res = res.slice(0, 2);
  res2 = res2.slice(0, 2);

  isPalidrome = res.length === 0;

  let cond = word[mid - 1] === word[res[0]];

  if (res.length === 1) {
    let comm = [mid - 1, res2[0]][+cond];
    let comm2 = [res[0], mid - 1][+cond];
    res.push(comm);
    res2.push(comm2);
  }

  res2.reverse();

  let arr = [res2, res][+cond];
  let arr2 = [res, res2][+cond];

  let temp = arr;
  res = arr2;
  res2 = temp;

  let f = arr2.filter((x, i) => word[x] === word[arr[i]]);

  return [null, f][+(f.length === 2) + +isPalidrome];
}

getIndexsForPalindrome("anna");
