import { mainGame } from './index.js';

// Определяем, является ли число простым.
const isPrime = (num) => {
  let i = 1;
  let count = 0;
  while (i <= num) {
    if (num % i === 0) {
      i += 1;
      count += 1;
    } else {
      i += 1;
    }
  }
  if (count === 2) {
    return 'yes';
  }
  return 'no';
};

// Генерим слуайное число, возвращаем результат в виде массива.
const prime = () => {
  const temp = Math.floor(Math.random() * 10 + 2);
  const num = `${temp}`;
  const correctAnswer = isPrime(temp);
  return [correctAnswer, num];
};


// Запускаем игру с нужными аргументами.
const startGame = () => {
  const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  mainGame(text, prime);
};

export default startGame;
