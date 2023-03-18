function findUnique(string) {

  let uniq = '';
  let counter = 0;

  for (let i = 0; i < string.length; i++) {

    if (uniq.includes(string[i]) === false) {

      uniq += string[i];

      counter++;
    }
  }
  return counter;
}

console.log(findUnique('ASDASD&&&&&S@'));


