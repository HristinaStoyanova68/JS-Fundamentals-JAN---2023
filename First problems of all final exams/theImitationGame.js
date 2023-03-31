function theImitationGame(input) {

  let message = input.shift();

  let commandLine = input.shift();

  while (commandLine !== 'Decode') {

    let [command, ...rest] = commandLine.split('|');

    if (command === 'Move') {
      let numOfLetters = Number(rest[0]);

      message = message.split('');
      let newMessage = message.splice(0, numOfLetters);
      message.push(...newMessage);
      message = message.join('');
    } else if (command === 'Insert') {
      let index1 = Number(rest[0]);
      let value = rest[1];

      message = message.split('');
      message.splice(index1, 0, value);
      message = message.join('');
    } else if (command === 'ChangeAll') {
      let [substring, replacment] = rest;

      while (message.includes(substring)) {
        let newMessage = message.replace(substring, replacment);
        message = newMessage;
      }
    }

    commandLine = input.shift();
  }

  console.log(`The decrypted message is: ${message}`);

}

theImitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
]
);
console.log('............');
theImitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode'
]
)