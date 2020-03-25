import readlineSync from 'readline-sync';

let name;

// Функция приветствия.
export const greeting = (text) => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(text);
};

// Основная функция игры.
export const mainGame = (text, condition) => {
  let i = 0;
  greeting(text);
  while (i < 3) {
    const arr = condition();
    console.log(`Question: ${arr[1]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === arr[0]) {
      i += 1;
      console.log('Correct!');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${arr[0]}".\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
