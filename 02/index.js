function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    [...gift].every((char) => materials.includes(char))
  );
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

manufacture(gifts, materials);
