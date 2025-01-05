const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (raio) => {
  const pi = 3.14159;
  const area = pi * Math.pow(parseFloat(raio), 2);
  
  console.log('A=' + area.toFixed(4)); 
  
  rl.close();
});
