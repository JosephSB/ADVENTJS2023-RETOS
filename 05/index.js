function cyberReindeer(road, time) {
  const r = [road];

  let i = 1;
  let z = ".";

  for (let x = 1; x < time; x++) {
    if (x == 5) road = road.replace(/\|/g, "*");

    if (road[i] != "|") {
      let t = road[i];
      road = road.replace(/S./g, z + "S");
      z = t;
      i++;
    }

    r.push(road);
  }

  return r;
}

const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
