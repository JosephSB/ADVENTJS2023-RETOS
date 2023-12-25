function transformTree(tree) {
  let max = tree.length;

  let i = (arguments[1] ??= 0);
  let r = +(i >= max) + +(tree[i] == null);
  let resp;

  [false][+(r <= 0)] ??= resp = {
    value: tree[i],
    left: transformTree(tree, i * 2 + 1),
    right: transformTree(tree, i * 2 + 2),
  };

  return (resp ??= null);
}

transformTree([]);
