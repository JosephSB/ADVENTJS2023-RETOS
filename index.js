/* -----------25 -----------------*/
function travelDistance (map) {
  let newMap = map.split("\n");
  let newMapJoined = newMap.join("");
  let index = newMapJoined.indexOf("S");
  let z = newMap[0].length;
  let posX = (index % z);
  let posY = (index / z) | 0

  const matches = map.match(/\d/g);
  const maxNumber = Math.max(...matches.map(Number));

  let movs = 0;
  let p = 1;
  for (const k of new Array(maxNumber)) {
    let ix = newMapJoined.indexOf(p);
    let i = [(ix % z), ((ix / z) | 0) ];
    movs += Math.abs(i[0] - posX) + Math.abs(i[1] - posY)
    posX = i[0];
    posY = i[1];
    p++;
  }

  return movs
}

const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result)

/* -----------24 -----------------*/
/*
function findCombinations(target, currentCombination, start) {
  if (target === 0) {
    // Se ha alcanzado la suma deseada, imprime la combinación actual
    console.log(currentCombination);
    return;
  }

  for (let i = start; i <= target; i++) {
    // Prueba con el número actual en la combinación
    currentCombination.push(i);

    // Llamada recursiva para encontrar combinaciones restantes
    findCombinations(target - i, currentCombination.slice(), i);

    // Retrocede, eliminando el último número para probar con el siguiente
    currentCombination.pop();
  }
}
const targetNumber = 5;
console.log("Result: ", findCombinations(targetNumber, [], 1));
*/
/* -----------23 -----------------*/
/*
function organizeChristmasDinner(dishes) {
  const obj = {};

  for (let d of dishes) {
    let dish = d[0];
    for (const i of d.slice(1)) {
      obj[i] = [...obj[i] ??= [], dish]
    }
  }

  let resp = [];

  for (const x of Object.entries(obj)) {
    let aux = [x[0], ...x[1].sort((a,b)=>a.localeCompare(b))]
    let temp = [null, aux][+(aux.length >= 3)];
    resp.push(temp);
  }

  return resp
    .filter(Boolean)
    .sort((a, b) => a[0].localeCompare(b[0]))
}

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

console.log("Result: ", organizeChristmasDinner(dishes));
*/
/* -----------22 -----------------*/
/*
function compile(code) {

  let x = 0;
  let y = 0;
  let is = false;
  let is2 = false;
  let checkpoint;

  while (y < code.length) {
    let i = code[y];

    console.log("--------",x,"------")
    console.log(code)
    console.log(i)
    console.log([checkpoint,y][+(i == "%")])
    x += [0,1,0][+(i == "+") + +((+(i == "+") + +(is) + +(is2)) == 3)]

    x -= [0,1,0][+(i == "-") + +((+(i == "-") + +(is) + +(is2)) == 3)]

    x *= [1,2,1][+(i == "*") + +((+(i == "*") + +(is) + +(is2)) == 3)]

    is = [is, true][+(i == "¿")]
    is2 = [is2, is2, true][+(i == "¿") + +(x <= 0)]
    is = [is, false][+(i == "?")]
    is2 = [is2, false][+(i == "?")]
    let temp = code.replace('%', '#');
    checkpoint = [checkpoint,y][+(i == "%")]

    code = [code, temp][+(i == "%")]

    let temp2 = code.replace('<', '#');
    code = [code, temp2][+(i == "<")]
    y = [y,checkpoint][+(i == "<")] ??= y
    y++;
  }


  return x
}

console.log("Result: ", compile('<<<<<<+<<<<<+%'))
*/
/* -----------21 -----------------*/
/*
function findBalancedSegment(message) {
  let results = [];
  let moreLong = -1;

  let x = 0;
  let size = message.length;
  let y = 0;
  for(let i of message){
    for(let f of new Array(size)){
      results.push([x,x+y])
      y++;
    }
    size--;
    y=0;
    x++;
  }

  for (const p of results) {
    console.log(p)
  }

  return results[moreLong];
}

function findBalancedSegment(message) {
  let maxRange = 0, index = -1;

  for (let i = 0; i < message.length - 1; i++) {
    let count = 0, count1 = 0;

    for (let j = i; j < message.length; j++) {
      count += +(message[j] === 0)
      count1 += +(message[j] === 1)

      if ((count === count1) && ((j - i) > maxRange)) {
        maxRange = j - i;
        index = i;
      }
    }
  }

  return [[index,index + maxRange], []][+(index < 0)]
}

console.log("Result: ",findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1]));
*/
/* -----------20 -----------------*/
/*
function distributeGifts(weights) {
  let resp = [];

  for (const row of weights) {
    resp.push([...row]);
  }
  
  let x = 0;
  let y = 0;

  for (const i of weights) {
    for (const k of i) {
      let c = [0,1][+(weights[x][y] != null)];
      let sum = weights[x][y];

      let l = +(weights[x]?.[y-1] != null)
      sum += [0, weights[x]?.[y-1]][l];
      c += l;

      let r = +(weights[x]?.[y+1] != null)
      sum += [0, weights[x]?.[y+1]][r];
      c += r;

      let t = +(weights?.[x-1]?.[y] != null)
      sum += [0, weights?.[x-1]?.[y]][t];
      c += t;

      let b = +(weights?.[x+1]?.[y] != null)
      sum += [0, weights?.[x+1]?.[y]][b];
      c += b;
      console.log(weights)
      console.log("Left: "+l+" rigth: "+r+" top: "+t+" bottom: "+b)
      console.log(sum)
      console.log(c)

      resp[x][y] = Math.round(sum/c);

      y++;
    }
    y=0;
    x++;
  }

  return resp
}

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
]

console.log("Result: ",distributeGifts(input));
*/
/* -----------19 -----------------*/
/*
function revealSabotage(store) {
  let x = 0;
  let y = 0;
  for (const i of store) {
    for (const k of i) {
      let c = 0;

      c = [c, c+1][+(store[x]?.[y-1] == "*")]
      c = [c, c+1][+(store[x]?.[y+1] == "*")]

      c = [c, c+1][+(store?.[x+1]?.[y-1] == "*")]
      c = [c, c+1][+(store?.[x+1]?.[y] == "*")]
      c = [c, c+1][+(store?.[x+1]?.[y+1] == "*")]

      c = [c, c+1][+(store?.[x-1]?.[y-1] == "*")]
      c = [c, c+1][+(store?.[x-1]?.[y] == "*")]
      c = [c, c+1][+(store?.[x-1]?.[y+1] == "*")]

      c = [c, " "][+(c == 0)]

      store[x][y] = [c.toString(), "*"][+(k == "*")];
      
      y++;
    }
    y=0;
    x++;
  }


  return store
}

function revealSabotage(store) {
  let x = 0;
  let y = 0;
  for (const i of store) {
    const p = i.indexOf("*");
    if(p == -1) {
      x++;
      continue;
    }

    console.log(store[x][p-1])
    
    let r = +((store[x]?.[p-1])?.trim() ?? 0) + 1;
    if(store[x][p-1]) store[x][p-1] = r.toString()

    let l = +((store[x]?.[p+1])?.trim() ?? 0) + 1;
    if(store[x][p+1]) store[x][p-1] = l.toString()

    let tl = +((store[x+1]?.[p-1])?.trim() ?? 0) + 1;
    if(store?.[x+1]?.[p-1]) store[x+1][p-1] = tl.toString()

    let tc = +((store[x+1]?.[p])?.trim() ?? 0) + 1;
    if(store?.[x+1]?.[p]) store[x+1][p] = tc.toString()

    let tr = +((store[x+1]?.[p+1])?.trim() ?? 0) + 1;
    if(store?.[x+1]?.[p+1]) store[x+1][p+1] = tr.toString()

    let bl = +((store[x-1]?.[p-1])?.trim() ?? 0) + 1;
    if(store?.[x-1]?.[p-1]) store[x-1][p-1] = bl.toString()

    let bc = +((store[x-1]?.[p])?.trim() ?? 0) + 1;
    if(store?.[x-1]?.[p]) store[x-1][p] = bc.toString()

    let br = +((store[x-1]?.[p+1])?.trim() ?? 0) + 1;
    if(store?.[x-1]?.[p+1]) store[x-1][p+1] = br.toString()
    
    x++;
  }


  return store
}

function revealSabotage(store) {
  const st = store
  let i = 0;
  let j = 0;

  for (const f of store) {
    for (const l of f) {
      const ij = st[i][j]
      const w = +(st[i - 1]?.[j - 1] == '*') + +(st[i - 1]?.[j] == '*')
      const y = +(st[i - 1]?.[j + 1] == '*') + +(st[i]?.[j - 1] == '*')
      const t = +(st[i]?.[j + 1] == '*') + +(st[i + 1]?.[j - 1] == '*')
      const k = +(st[i + 1]?.[j] == '*') + +(st[i + 1]?.[j + 1] == '*')
      const x = `${w + y + t + k}`
      st[i][j] = [ij, x][+(w + y + t + k > 0) * +(ij === ' ')]

      j++;
    }
    j=0;
    i++;
  }
  return store
}

const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
*/
/* -----------18 -----------------*/
/*
function drawClock(time) {
  const map = {
    0: ["***", "* *", "* *", "* *", "* *", "* *", "***"],
    1: ["  *", "  *", "  *", "  *", "  *", "  *", "  *"],
    2: ["***", "  *", "  *", "***", "*  ", "*  ", "***"],
    3: ["***", "  *", "  *", "***", "  *", "  *", "***"],
    4: ["* *", "* *", "* *", "***", "  *", "  *", "  *"],
    5: ["***", "*  ", "*  ", "***", "  *", "  *", "***"],
    6: ["***", "*  ", "*  ", "***", "* *", "* *", "***"],
    7: ["***", "  *", "  *", "  *", "  *", "  *", "  *"],
    8: ["***", "* *", "* *", "***", "* *", "* *", "***"],
    9: ["***", "* *", "* *", "***", "  *", "  *", "  *"],
    ":": ["   ", "   ", " * ", "   ", " * ", "   ", "   "],
  };

  const l1 = time[0];
  const l2 = time[1];
  const l4 = time[3];
  const l5 = time[4];

  const resp = [];

  for (let i of [0,1,2,3,4,5,6]) {
    resp.push([
      ...map[l1][i],
      " ",
      ...map[l2][i],
      ...map[":"][i],
      ...map[l4][i],
      " ",
      ...map[l5][i],
    ]);
  }

  return resp;
}

const drawer = (time) => {
  const resp = drawClock(time);

  for (const i of resp) {
    console.log(i.join(""));
  }
};

console.log("Result: ", drawer("17:39"));
*/
/* -----------17 -----------------*/
/*
function optimizeIntervals(intervals) {
  const sort = intervals.sort((x, y) => x[0] - y[0])
  let resp = [sort[0]];
  let x = 0;
  let op = 0;

  for (const i of sort.slice(1)) {
    const [l,r] = i

    op = +(l >= resp[x][0]) + +(l <= resp[x][1])

    [false][+(op == 2)] ?? (
      resp[x][1] = [resp[x][1],r][+(r > resp[x][1])]
    )

    [false][+(op < 2)] ?? (
      x++
    )

    resp[x] = i
  }

  return resp
}

const resp = optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
])

console.log("Result: ", resp)
*/
/* -----------16 -----------------*/
/*
function transformTree(tree) {

  let max = tree.length;

  function createTree (tree, i) {
    let r = +(i >= max) + +(tree[i] === null)
    if(r > 0) return null
    return {
      value: tree[i],
      left: createTree(tree, (i * 2) + 1),
      right: createTree(tree, (i * 2) + 2)
    };
  }

  return createTree(tree, 0);
}

const arbol = transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])

console.log("Resp: ", JSON.stringify(arbol, null, 2))
*/
/* -----------15 -----------------*/
/*
function autonomousDrive(store, movements) {
  let w = store[0].length;
  let m = store.join("").indexOf("!")
  let a = (m/w) | 0 
  let p = m % w

  store[a] = store[a].replace("!", ".") 

  for(let m of movements){
    let next = p - +(m == "L") + +(m == "R");
    let jump = a - +(m == "U") + +(m == "D");
    let op = +(store[jump]?.[next] === ".")
    p = [p, next][op]
    a = [a, jump][op]
  }

  let temp = [...store[a]]
  temp[p] = "!"
  store[a] = temp.join("")
  return store
}


function autonomousDrive(store, movements) {

  let max = store.length;
  let a = store.findIndex(it => it.includes("!")) 
  let p = store[a].indexOf("!") 


  store[a] = store[a].replace("!", ".") 

  for(let m of movements){
    let op = p + 1 <= store[a].length - 1
    p += [0, 0, 0, 1][+(m == "R") + +(store[a][p + 1] != "*") + +(op)]
    if(m == "R") continue


    let op3 = a+1 <= max - 1
    let cond3 = [a, a+1][+(op3)]
    a += [0, 0, 0, 1][+(m == "D") + +(store[cond3][p] != "*") + +(op3)]

    p -= [0, 0, 1][+(m == "L") + +(store[a][p - 1] != "*")]
  
    let cond4 = [a, a-1][+(a-1 >= 0 )]
    a -= [0, 0, 1][+(m == "U") + +(store[cond4][p] != "*")]
  }

  let temp = [...store[a]]
  temp[p] = "!"
  store[a] = temp.join("")
  return store

}

const store = [
  '.**.*.*.',
  '.***....',
  '..!.....'
]

const movements = ['D', 'U', 'R', 'R', 'R']
console.log("result: ", autonomousDrive(store, movements))
*/
/* -----------14 -----------------*/
/*
function maxGifts(houses) {
  const dp = [houses[0], Math.max(houses[0], houses[1])];

  let i = 2;
  for (let h of houses) {
    dp.push(Math.max(dp[i - 1], dp[i - 2] + houses[i]));
    i++;
  }

  return dp[houses.length - 1];
}

console.log(maxGifts([2, 4, 2]))*/
/* -----------13 -----------------*/
/*
function calculateTime(deliveries) {
  let t1 = 25200;

  for (const t of deliveries) {
    let parse = t.match(/\d+/g).map(Number);
    t1 = t1 - (parse[0] * 3600)
    t1 = t1 - (parse[1] * 60)
    t1 = t1 - parse[2]
  }

  let time = Math.abs(t1);

  let h = Math.floor(time / 3600);
  let m = Math.floor((time % 3600) / 60);
  let s = time % 60;

  let resp = ""
  resp += [h,"0"+h][+(h<10)]+":"
  resp += [m,"0"+m][+(m<10)]+":"
  resp += [s,"0"+s][+(s<10)]
  
  let add = ["", "-"][+(t1 > 0)]

  return add+resp
}


console.log("Result: ", calculateTime(['00:10:00', '01:00:00', '03:30:00']))
console.log("Result: ", calculateTime(['02:00:00', '05:00:00', '00:30:00']))
*/
/* -----------12 -----------------*/
/*
function checkIsValidCopy(original, copy) {
  const cleanOriginal = original.toLowerCase()
  const deg = ["#","+", ":", ".", " "];
  let resp = true;

  for (let i of Array.from({length: original.length}).keys()) {
    let letra = cleanOriginal[i];
    let letra2 = copy[i];

    let inx=0;

    inx += [0, 0, 3][+(letra === " ") + +(letra !== letra2)];
    inx -= [0, 2][+(deg.includes(letra2))]
    inx += [0, 1][+(letra !== letra2)]

    if(inx > 0) {
      resp=false;
      break
    }
    
  }

  return resp
}

console.log("Result: ", checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#'))
*/
/* -----------11 -----------------*/
/*

function getIndexsForPalindrome(word) {
  let mid = Math.round(word.length/2);
  let res = [];
  let res2 = []
  let isPalidrome = false;

  for (const i of Array.from({length: mid}).keys()) {
    let end = word.length - 1 - i;
    if(word[i] !== word[end]) {
      res.push(i)
      res2.push(end)
    }
  }

  res = res.slice(0,2)
  res2 = res2.slice(0,2)

  isPalidrome = res.length === 0;

  let cond = word[mid-1] === word[res[0]]

  if(res.length === 1){
    let comm = [mid-1, res2[0]][+(cond)]
    let comm2 = [res[0], mid-1][+(cond)]
    res.push(comm)
    res2.push(comm2)
  }

  res2.reverse()

  let arr = [res2, res][+(cond)]
  let arr2 = [res, res2][+(cond)]

  let temp = arr;
  res = arr2
  res2 = temp;

  let f = arr2.filter((x, i) => word[x] === word[arr[i]]);

  return [null, f][+(f.length === 2) + +(isPalidrome)]
}

function getIndexsForPalindrome(word) {
  let mid = Math.round(word.length/2);
  let res = [];
  let res2 = []
  let isPalidrome = false;

  for (const i of Array.from({length: mid}).keys()) {
    let end = word.length - 1 - i;
    if(word[i] !== word[end]) {
      res.push(i)
      res2.push(end)
    }
  }

  res = res.slice(0,2)
  res2 = res2.slice(0,2)

  isPalidrome = res.length === 0;

  let cond = word[mid-1] === word[res[0]]

  if(res.length === 1){
    let comm = [mid-1, res2[0]][+(cond)]
    let comm2 = [res[0], mid-1][+(cond)]
    res.push(comm)
    res2.push(comm2)
  }

  res2.reverse()

  let arr = [res2, res][+(cond)]
  let arr2 = [res, res2][+(cond)]

  let temp = arr;
  res = arr2
  res2 = temp;

  let f = arr2.filter((x, i) => word[x] === word[arr[i]]);

  return [null, f][+(f.length === 2) + +(isPalidrome)]
}

function getIndexsForPalindrome(word) {
  let mid = Math.round(word.length/2);
  let res = [];
  let res2 = []
  let isPalidrome = false;

  for (const i of Array.from({length: mid}).keys()) {
    let end = word.length - 1 - i;
    if(word[i] !== word[end]) {
      res.push(i)
      res2.push(end)
    }
  }

  res = res.slice(0,2)
  res2 = res2.slice(0,2)

  isPalidrome = res.length === 0;

  let cond = word[mid-1] === word[res[0]]

  if(res.length === 1){
    let comm = [mid-1, res2[0]][+(cond)]
    let comm2 = [res[0], mid-1][+(cond)]
    res.push(comm)
    res2.push(comm2)
  }

  res2.reverse()

  let arr = [res2, res][+(cond)]
  let arr2 = [res, res2][+(cond)]

  let temp = arr;
  res = arr2
  res2 = temp;

  let arrfinal= [];

  let p = 0;
  for (const i of arr2) {
    let s = [null, i][+(word[i] === word[arr[p]])]
    arrfinal.push(s)
    p++;
  }
  console.log(arrfinal)
  let f = arrfinal.filter(Boolean);
  console.log(f)
  return [null, f][+(f.length === 2) + +(isPalidrome)]
}

console.log(getIndexsForPalindrome('abab'))
*/
/* -----------10 -----------------*/
/*
function createChristmasTree(ornaments, height) {
  let size = ((height * ( height + 1) )/ 2)
  let l = ornaments.repeat(size)
  let x = 0;
  let tree = "";

  for (let i = 0; i < height; i++) {
    tree += " ".repeat(height - i - 1); 
    tree += l.slice(x, x + i + 1).split("").join(" ")
    tree += "\n";
    x += i + 1;
  }
  return tree+" ".repeat(height - 1)+'|\n'
}

function createChristmasTree(ornaments, height) {
  let size = ((height * ( height + 1) )/ 2 * ornaments.length)
  let l = ornaments.repeat(size)
  let x = 0;
  let tree = "";

  for (const i of Array.from({ length: height }).keys()) {
    tree += " ".repeat(height - i - 1); 
    tree += l.slice(x, x + i + 1).replaceAll("", " ").trim()
    tree += "\n";
    x += i + 1;
  }
  return tree+" ".repeat(height - 1)+'|\n'
}

function createChristmasTree(ornaments, height) {
  let tot = ornaments.length - 1;
  let x = 0;
  let tree = "";
  let z = 1;

  for (let i = height; i > 0; i--) {

    tree += " ".repeat(i - 1); 

    for (let y = 0; y < z; y++) {

      const e = ornaments[x];
      tree += e+(" ".repeat(+((y+1) < z)));
      x = [x+1, 0][+(x >= tot)]
    }
    tree += "\n";
    z++;
  }
  return tree+" ".repeat(height - 1)+'|\n'
}

console.log(createChristmasTree('x', 10))
*/
/* -----------9 -----------------*/
/*
function adjustLights(lights) {
  let obj = { "🔴": "🟢", "🟢": "🔴"}
  let prev = obj[lights[0]];
  let tot = 0;

  for (let x of lights) {
    tot += +(x === prev);
    prev = obj[prev]
  }

  return tot
}

function adjustLights(lights) {
  let start = ""
  let res = 0;

  for (let l of lights) {
    console.log(l, " : ", start, " ::: ",+(l == start))
    res += +(l == start);
    start = [l, " "][+(l == start)]
  }

  return res
}

console.log("Result: ",adjustLights(["🔴", "🟢", " ", "🟢", "🟢"]))
*/
/* -----------8 -----------------*/
/*
function organizeGifts(gifts) {
  const regex = /(\d+)([a-zA-Z])/g;
  const matches = gifts.matchAll(regex);

  let str = ""

  for (const match of matches) {
    const [, value, key] = match;
    let box = Math.trunc(value / 10)
    let pale = Math.trunc(box / 5);
    box = box - (pale * 5)
    let bag = value - ((pale * 5 * 10) + (box * 10)) 
    str += `[${key}]`.repeat(pale)
    str += `{${key}}`.repeat(box)
    str += `(${key.repeat(bag)})`.repeat(+!!bag)
    
    //.repeat(+!!bag): Después de la primera expresión, se utiliza .repeat(+!!bag). 
    //Aquí, +!!bag es una forma compacta de convertir el valor de bag a 1 si bag es un número diferente de cero y 
    //a 0 si bag es 0. Luego, el método repeat() se aplica a la cadena resultante para repetirla esa cantidad de veces.
    
  }

  return str
}

console.log("Result: ", organizeGifts("20a"))
*/
/* -----------7 -----------------*/
/*
function drawGift(size, symbol) {
  if(size === 1)  return '#\n'

  const b = [];

  b.push("#".repeat(size)+symbol.repeat(size - 2)+"#")
  
  for (let i = 0; i < size - 2; i++) {
    let fill = " ".repeat(i + 1)
    let a = "#"+symbol.repeat(size - 2)+"#"+symbol.repeat(size-3-i)+"#"
    b.unshift(fill+a)
    b.push(a)
  }

  b.unshift(" ".repeat(size - 1)+"#".repeat(size))
  b.push("#".repeat(size)+"\n")

  return b.join("\n")
}

console.log(drawGift(5, "/"))
*/
/* -----------6 -----------------*/
/*
function maxDistance(movements) {
  // Code here
  let r = movements.match(/>/g).length ?? 0
  let l = movements.match(/</g).length ?? 0

  let e = movements.length - (r + l)

  return Math.abs(r - l) + e
}


function maxDistance(movements) {
  // Code here
  let o = {
    "<": 0,
    ">": 0,
    "*": 0
  };

  [...movements].map(x => o[x]++)

  return Math.abs(o[">"] - o["<"]) + o["*"]
}

const movements = '>>*<'
console.log("result: ", maxDistance(movements)) // -> 2
*/

/* -----------5 -----------------*/
/*
function cyberReindeer(road, time) {
  const r = [road];

  let i = 1;
  let z = ".";

  for (let x = 1; x < time; x++) {

    if (x == 5) road = road.replace(/\|/g, "*")

    if (road[i] != "|") {
      let t = road[i];
      const regex = new RegExp(`S${i}(?=[^.*])`, 'g');
      road = road.replace(regex, `${z}S`)
      z = t;
      i++;
    }

    r.push(road);
  }

  return r;
}


function cyberReindeer(road, time) {
  // Code here
  const r = [road];

  let i = 1;
  let z = ".";

  for (let x = 1; x < time; x++) {
    if (x === 5) road = road.replace(/\|/g, "*")

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



function cyberReindeer(road, time) {
  // Code here
  const result = [road];
  let roadArr = [...road]

  let i = 1;
  let lastChar = "."
  let tempTime = time;

  while ( tempTime - 1 > 0) {
    tempTime--;
    if(tempTime === time - 5) roadArr = [...roadArr.join("").replaceAll("|", "*")]
    if(roadArr[i] === "." || roadArr[i] === "*"){
      roadArr[i-1] = lastChar
      lastChar = roadArr[i];
      roadArr[i] = "S"
      result.push(roadArr.join(""))
      i++;
      continue
    }
    if(roadArr[i] === "|"){
      result.push(roadArr.join(""))
      continue
    }
  }

  return result
}


const road = 'S..|...|..'
const time = 10 // unidades de tiempo
console.log("result:", cyberReindeer(road, time))
*/
/* -----------4 -----------------*/
/*
function decode(message) {
  const regex = /\(([^()]+)\)/g;
  const cb = (_, g) => [...g].reverse().join("")

  const resp = message.replace(regex, cb).replace(regex, cb)
  return resp;
}


function decode(message) {
  let decodeMsg = [];

  let i = -1;

  while (i < message.length) {
    i++;
    if (message[i] === "(") {
      const {value, index} = decode(message.slice(i + 1))
      decodeMsg = [...decodeMsg, ...value]
      i += index;
      continue;
    }else if (message[i] === ")") {
      return {
        value: decodeMsg.reverse(),
        index: i + 1
      };
    }else {
      decodeMsg.push(message[i])
    }
  }

  return decodeMsg.join("");
}



console.log("result:", decode('(olleh) (dlrow)!'))
console.log("result:", decode('sa(u(cla)atn)s'))
console.log("result:", decode('sa(u(cla)atn)s'))
*/
/* -----------3 -----------------*/
/*
function findNaughtyStep(original, modified) {
  console.log(Math.max(...[original, modified].map(s => s.length)))
  let stringMoreLong = Math.max(...[original, modified].map(s => s.length))
  return [...stringMoreLong].find((x, i) => original[i] !== modified[i]) ?? ""
}

function findNaughtyStep(original, modified) {
  let stringMoreLong = original.length > modified.length ? original : modified

  for (let i = 0; i < stringMoreLong.length; i++) {
    if (original[i] !== modified[i]) {
      return stringMoreLong.charAt(i)
    }
  }
  return ""
}

//const original = 'xxxx'
//const modified = 'xxoxx'
const original = 'stepfor'
const modified = 'stepor'

console.log("result:", findNaughtyStep(original, modified))
*/
/* -----------2 -----------------*/
/*function manufacture(gifts, materials) {
    const arrGiftsAvailables = [];

    gifts.map( gift => {
        let word = "";
        for(i=0; i < gift.length; i++){
            if(materials.includes(gift.charAt(i))) word += gift.charAt(i)
        }
        if(word === gift) arrGiftsAvailables.push(gift)
    })
    // Code here
    return arrGiftsAvailables
}

function manufacture(gifts, materials) {
  let res = [];

  for(let g of gifts){
    const x = [...new Set(g + materials)]
    let p = [null, g][+(x.length == materials.length)]
    res.push(p);
  }

  return res.filter(Boolean);
}

function manufacture(gifts, materials) {
    return gifts.filter(g => {
      const x = [...new Set(g + materials)]
      return x.length == materials.length
    })
  }

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log("result:", manufacture(gifts, materials))
*/
/* -----------1 -----------------*/
/*

function findFirstRepeated(gifts) {
  const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i)
  return [-1, repeated[0]][+(repeated.length > 0)]
}

function findFirstRepeated(gifts) {
  let obj = new Set();
  let res = -1;

  for(let g of gifts){
    res = [res, res, g][+(obj.has(g)) + +(res == -1)]
    obj.add(g);
  }

  return res
}


function findFirstRepeated(gifts) {
    let obj = {};
    let res = -1;
    
    gifts.find((g) => {
      if (obj[g]) {
        res = g;
        return true;
      }
      obj[g] = true;
    });
    
    return res
}

console.log("result:", findFirstRepeated([2, 1, 3, 5, 3, 2]))*/
