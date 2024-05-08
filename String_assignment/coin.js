const amount = 46;
const coins = [25, 10, 5, 2, 1];
const result = [];
let remainingAmount = amount;

for (let i = 0; i < coins.length && remainingAmount > 0; i++) {
  const coin = coins[i];
  for (; remainingAmount >= coin; remainingAmount -= coin) {
    result.push(coin);
  }
}

console.log(result); // Outputs the array of coins representing the amount
