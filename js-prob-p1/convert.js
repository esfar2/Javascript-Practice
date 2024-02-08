function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) && typeof livingCost === 'number') {
    let savings = 0;
    let total = 0;
    for (number of arr) {
      if (number >= 3000) {
        number = number - number * 0.2;
        total += number;
      } else {
        total += number;
      }
    }
    savings = total - livingCost;
    return savings >= 0 ? savings : '"earn more"';
  } else {
    return 'invalid input';
  }
}
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
