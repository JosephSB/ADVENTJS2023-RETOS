function distributeGifts(weights) {
  let resp = [];

  for (const row of weights) {
    resp.push([...row]);
  }

  let x = 0;
  let y = 0;

  for (const i of weights) {
    for (const k of i) {
      let c = [0, 1][+(weights[x][y] != null)];
      let sum = weights[x][y];

      let l = +(weights[x]?.[y - 1] != null);
      sum += [0, weights[x]?.[y - 1]][l];
      c += l;

      let r = +(weights[x]?.[y + 1] != null);
      sum += [0, weights[x]?.[y + 1]][r];
      c += r;

      let t = +(weights?.[x - 1]?.[y] != null);
      sum += [0, weights?.[x - 1]?.[y]][t];
      c += t;

      let b = +(weights?.[x + 1]?.[y] != null);
      sum += [0, weights?.[x + 1]?.[y]][b];
      c += b;

      resp[x][y] = Math.round(sum / c);

      y++;
    }
    y = 0;
    x++;
  }

  return resp;
}

const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
  ]
  
  distributeGifts(input)