const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let A, B;

rl.question('', (inputA) => {
  A = parseInt(inputA);
  rl.question('', (inputB) => {
    B = parseInt(inputB);
    console.log('X = ' + (A + B));
    rl.close();
  });
});
