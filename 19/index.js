function revealSabotage(store) {
  const st = store;
  let i = 0;
  let j = 0;

  for (const f of store) {
    for (const l of f) {
      const ij = st[i][j];
      const w = +(st[i - 1]?.[j - 1] === "*") + +(st[i - 1]?.[j] === "*");
      const y = +(st[i - 1]?.[j + 1] === "*") + +(st[i]?.[j - 1] === "*");
      const t = +(st[i]?.[j + 1] === "*") + +(st[i + 1]?.[j - 1] === "*");
      const k = +(st[i + 1]?.[j] === "*") + +(st[i + 1]?.[j + 1] === "*");
      const x = `${w + y + t + k}`;
      st[i][j] = [ij, x][+(w + y + t + k > 0) * +(ij === " ")];

      j++;
    }
    j = 0;
    i++;
  }
  return store;
}

const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

console.log(revealSabotage(store));
