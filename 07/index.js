function drawGift(size, symbol) {
  const b = [];

  let middle = "#".repeat(size) + symbol.repeat(size - 1);

  b.push(middle.slice(0, middle.length - 1) + "#");

  for (let i of Array.from({ length: size - 2 }).keys()) {
    let fill = " ".repeat(i + 1);
    let a =
      "#" + symbol.repeat(size - 2) + "#" + symbol.repeat(size - 3 - i) + "#";
    b.unshift(fill + a);
    b.push(a);
  }

  b.unshift(" ".repeat(size - 1) + "#".repeat(size));
  b.push("#".repeat(size) + "\n");

  return [b.join("\n"), "#\n"][+(size == 1)];
}

drawGift(4, "+");
