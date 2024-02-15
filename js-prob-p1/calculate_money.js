function calculateMoney(ticketSale) {
  let fixedCost = 500 + 8 * 50;
  let income = 0;
  if (ticketSale >= 0) {
    income = ticketSale * 120 - fixedCost;
    return income;
  } else {
    return ticketSale < 0 ? "error: Please enter a positive value" : '"Please enter a valid number"';
  }
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(calculateMoney("Sami"));

