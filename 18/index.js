function drawClock(time) {
  const map = {
    0: ["***", "* *", "* *", "* *", "* *", "* *", "***"],
    1: ["  *", "  *", "  *", "  *", "  *", "  *", "  *"],
    2: ["***", "  *", "  *", "***", "*  ", "*  ", "***"],
    3: ["***", "  *", "  *", "***", "  *", "  *", "***"],
    4: ["* *", "* *", "* *", "***", "  *", "  *", "  *"],
    5: ["***", "*  ", "*  ", "***", "  *", "  *", "***"],
    6: ["***", "*  ", "*  ", "***", "* *", "* *", "***"],
    7: ["***", "  *", "  *", "  *", "  *", "  *", "  *"],
    8: ["***", "* *", "* *", "***", "* *", "* *", "***"],
    9: ["***", "* *", "* *", "***", "  *", "  *", "***"],
    ":": ["   ", "   ", " * ", "   ", " * ", "   ", "   "],
  };

  const resp = [];
  const arr = [0, 1, 2, 3, 4, 5, 6];

  const l1 = time[0];
  const l2 = time[1];
  const l4 = time[3];
  const l5 = time[4];

  for (let i of arr) {
    resp.push([
      ...map[l1][i],
      " ",
      ...map[l2][i],
      ...map[":"][i],
      ...map[l4][i],
      " ",
      ...map[l5][i],
    ]);
  }

  return resp;
}

drawClock("01:30");