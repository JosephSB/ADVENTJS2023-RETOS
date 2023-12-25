function organizeGifts(gifts) {
  const regex = /(\d+)([a-zA-Z])/g;
  const matches = gifts.matchAll(regex);

  let str = "";

  for (const match of matches) {
    const [, value, key] = match;
    let box = Math.trunc(value / 10);
    let pale = Math.trunc(box / 5);
    box = box - pale * 5;
    let bag = value - (pale * 5 * 10 + box * 10);
    str += `[${key}]`.repeat(pale);
    str += `{${key}}`.repeat(box);
    str += `(${key.repeat(bag)})`.repeat(+!!bag);
  }

  return str;
}

const result1 = organizeGifts(`76a11b`);
console.log(result1);
