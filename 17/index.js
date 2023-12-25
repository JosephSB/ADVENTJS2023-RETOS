function optimizeIntervals(intervals) {
  const s = intervals;

  for (let i of Array.from({ length: s.length - 1 }).keys()) {
    for (let j of Array.from({ length: s.length - 1 - i }).keys()) {
      [s[j], s[j + 1]] = [
        [s[j], s[j + 1]],
        [s[j + 1], s[j]],
      ][+(s[j][0] > s[j + 1][0])];
    }
  }

  let resp = [s[0]];

  for (const i of s.slice(1)) {
    const [l, r] = i;
    let x = resp.length - 1;

    let op = [false, false, true][+(l >= resp[x][0]) + +(l <= resp[x][1])];

    let temp = resp[x][1];
    resp[x][1] = [temp, temp, r][+(r > resp[x][1]) + +op];

    let next = [x, x + 1][+!op];
    let val = [resp[x], i][+!op];

    resp[next] = val;
  }

  return resp;
}

optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4],
]);
