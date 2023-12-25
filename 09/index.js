function adjustLights(lights) {
  let prev = "";
  let tot = 0;

  for (let x of lights) {
    tot += +(x === prev);
    prev = [x, " "][+(x === prev)];
  }

  return tot;
}

adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
