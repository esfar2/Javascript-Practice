function checkName(name) {
  if (typeof name === 'string') {
    if (
      name.at(-1).toLowerCase() === 'A' ||
      name.at(-1).toLowerCase() === 'y' ||
      name.at(-1).toLowerCase() === 'i' ||
      name.at(-1).toLowerCase() === 'e' ||
      name.at(-1).toLowerCase() === 'o' ||
      name.at(-1).toLowerCase() === 'u' ||
      name.at(-1).toLowerCase() === 'w'
    ) {
      return 'Good Name';
    }
    return 'Bad Name';
  } else {
    return 'invalid';
  }
}

console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
