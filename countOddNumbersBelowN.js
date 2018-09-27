// Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount (n) {
  (n % 2 === 0 ? Math.floor((n - 1) / 2) : Math.floor((n - 2) / 2))
}

// const oddCount = n =>
//   (n % 2 === 0 ? Math.floor((n - 1) / 2) : Math.floor((n - 2) / 2))

console.log(oddCount(6))

