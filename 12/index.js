function checkIsValidCopy(original, copy) {
  // generar la regex
  let regex = "^";
  const orden = "#+:. ";
  for (const char of original) {
    let pos = "";
    pos += char;
    pos += char.toLowerCase();

    let ind = orden.indexOf(char);
    // convertir -1 a 0 sin modificar el resto
    ind = ind + 1;
    ind = ind - !!ind;

    const tmp = orden.slice(ind);
    pos += tmp;

    regex += `[${pos}]`;
  }
  regex += "$";

  // comprobar la regex
  const reg = new RegExp(regex);

  return reg.test(copy);
}

checkIsValidCopy("Santa Claus is coming", "sa#ta Cl#us i+ comin#");
