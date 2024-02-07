function deleteInvalids(array) {
  if (Array.isArray(array)) {
    return array.filter(function (item) {
      return typeof item === 'number' && !isNaN(item);
    });
  } else {
    return '"Invalid Array"';
  }
}

console.log(deleteInvalids(['1', { num: 2 }, NaN]));
