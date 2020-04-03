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
export const runGame = (text, condition) => {
  greeting(text);
  for (let i = 0; i < 3; i += 1) {
    const [rightAnswer, questionInfo] = condition();
    console.log(`Question: ${questionInfo}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
