function createChristmasTree(ornaments, height) {
  let size = (height * (height + 1)) / 2;
  let l = ornaments.repeat(size);
  let x = 0;
  let tree = "";

  const arr = new Array(height);
  let i = 0;
  for (let g of arr) {
    tree += " ".repeat(height - i - 1);
    tree += l
      .slice(x, x + i + 1)
      .split("")
      .join(" ");
    tree += "\n";
    x += i + 1;
    i++;
  }
  return tree + " ".repeat(height - 1) + "|\n";
}

createChristmasTree("123", 5);
