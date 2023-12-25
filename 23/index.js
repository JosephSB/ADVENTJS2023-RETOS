function organizeChristmasDinner(dishes) {
  const obj = {};

  for (let d of dishes) {
    let dish = d[0];
    for (const i of d.slice(1)) {
      obj[i] = [...(obj[i] ??= []), dish];
    }
  }

  let resp = [];

  for (const x of Object.entries(obj)) {
    let aux = [x[0], ...x[1].sort((a, b) => a.localeCompare(b))];
    let temp = [null, aux][+(aux.length >= 3)];
    resp.push(temp);
  }

  return resp.filter(Boolean).sort((a, b) => a[0].localeCompare(b[0]));
}

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

organizeChristmasDinner(dishes);
