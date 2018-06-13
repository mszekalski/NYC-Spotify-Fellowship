function changePossibilities(amount, coins) {
  let answer = [];
  for (let i = 0; i <= amount; i++) {
    answer[i] = 0;
  }
  answer[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j < answer.length; j++) {
      if (j >= coins[i]) {
        answer[j] += answer[j - coins[i]];
      }
    }
  }
  return answer[amount];
}
