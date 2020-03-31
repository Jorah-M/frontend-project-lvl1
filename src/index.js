import readlineSync from 'readline-sync';

let name;

// Функция приветствия.
export const greeting = (text) => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(text);
};

// Функция, генерирующая случайное число в диапазоне от min до max.
export const generateRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Основная функция игры.
export const mainGame = (text, condition) => {
  greeting(text);
  for (let i = 0; i < 3; i += 1) {
    const [rightAnswer, questionInfo] = condition();
    console.log(`Question: ${questionInfo}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
  return undefined;
};
