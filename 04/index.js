function decode(message) {
  const regex = /\(([^()]+)\)/g;
  const cb = (_, g) => [...g].reverse().join("");

  const resp = message.replace(regex, cb).replace(regex, cb);
  return resp;
}

const a = decode("hola (odnum)");
console.log(a);
