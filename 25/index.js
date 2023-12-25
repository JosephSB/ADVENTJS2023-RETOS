function travelDistance(map) {
  let newMap = map.split("\n");
  let newMapJoined = newMap.join("");
  let index = newMapJoined.indexOf("S");
  let z = newMap[0].length;
  let posX = index % z;
  let posY = (index / z) | 0;

  const matches = map.match(/\d/g);
  const maxNumber = Math.max(...matches.map(Number));

  let movs = 0;
  let p = 1;
  for (const k of new Array(maxNumber)) {
    let ix = newMapJoined.indexOf(p);
    let i = [ix % z, (ix / z) | 0];
    movs += Math.abs(i[0] - posX) + Math.abs(i[1] - posY);
    posX = i[0];
    posY = i[1];
    p++;
  }

  return movs;
}

const map = `.....1....
..S.......
..........
....3.....
......2...`;

const result = travelDistance(map);
console.log(result);
