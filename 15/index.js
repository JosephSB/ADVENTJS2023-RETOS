function autonomousDrive(store, movements) {
  let w = store[0].length;
  let m = store.join("").indexOf("!");
  let a = (m / w) | 0;
  let p = m % w;

  store[a] = store[a].replace("!", ".");

  for (let m of movements) {
    let next = p - +(m == "L") + +(m == "R");
    let jump = a - +(m == "U") + +(m == "D");
    let op = +(store[jump]?.[next] === ".");
    p = [p, next][op];
    a = [a, jump][op];
  }

  let temp = [...store[a]];
  temp[p] = "!";
  store[a] = temp.join("");
  return store;
}

const store = ["..!....", "...*.*."];

const movements = ["R", "R", "D", "L"];
const result = autonomousDrive(store, movements);
console.log(result);
