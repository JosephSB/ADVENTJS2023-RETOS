function findBalancedSegment(message) {
  let maxRange = 0,
    index = -1;

  for (let i = 0; i < message.length - 1; i++) {
    let count = 0,
      count1 = 0;

    for (let j = i; j < message.length; j++) {
      let op = message[j] === 0;
      count += +op;
      count1 += +!op;

      if (count === count1 && j - i > maxRange) {
        maxRange = j - i;
        index = i;
      }
    }
  }

  return [[index, index + maxRange], []][+(index < 0)];
}

findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]);
