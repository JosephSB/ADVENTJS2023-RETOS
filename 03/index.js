function findNaughtyStep(original, modified) {
  let y = [modified, original][+(original.length > modified.length)];
  return [...y].find((x, i) => original[i] !== modified[i]) ?? "";
}

const original = "abcd";
const modified = "abcde";
findNaughtyStep(original, modified);
