function calculateTime(deliveries) {
  let t1 = 25200;

  for (const t of deliveries) {
    let [h, m, s] = t.match(/\d+/g);
    t1 -= +h * 3600 + +m * 60 + +s;
  }

  let time = Math.abs(t1);
  let resp = new Date(time * 1000).toISOString().slice(11, 19);

  return [resp, "-" + resp][+(t1 > 0)];
}

calculateTime(["00:10:00", "01:00:00", "03:30:00"]);
