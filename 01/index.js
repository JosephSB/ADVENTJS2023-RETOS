function findFirstRepeated(gifts) {
  const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i);
  return [-1, repeated[0]][+(repeated.length > 0)];
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)