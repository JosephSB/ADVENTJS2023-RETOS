function maxDistance(movements) {
  // Code here
  let r = movements.match(/>/g)?.length ?? 0;
  let l = movements.match(/</g)?.length ?? 0;

  let e = movements.length - (r + l);

  return Math.abs(r - l) + e;
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result);
