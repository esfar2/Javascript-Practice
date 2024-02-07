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
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
