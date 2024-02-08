function calculateMoney(ticketSale) {
  let costOfEmployees = 500 + 8 * 50;
  let income = 0;
  if (ticketSale >= 0) {
    income = ticketSale * 120 - costOfEmployees;
    return income;
  } else {
    return '"Invalid Number"';
  }
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
