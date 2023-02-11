function lastKNumbersSequence(length, countKNumbers) {
   let sequence = [1];

   for (let i = 1; i < length; i++) {
      
      let index = Math.max(sequence.length - countKNumbers, 0)
      let lastElements = sequence.slice(index);
      

      let sum = 0;
      for (const elem of lastElements) {
         sum += elem;

      }
      sequence.push(sum);
   }
   console.log(sequence.join(' '));
}

lastKNumbersSequence(6, 3);
console.log('................');
lastKNumbersSequence(8, 2);