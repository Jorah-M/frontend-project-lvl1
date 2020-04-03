import { runGame } from '../index.js';
import generateRandom from '../utils.js';

// Определяем, является ли число простым.
const isPrime = (num) => {
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

// Генерим слуайное число, возвращаем результат в виде массива.
const returnPrime = () => {
  const temp = generateRandom(2, 15);
  const question = `${temp}`;
  const answer = isPrime(temp) ? 'yes' : 'no';
  return [answer, question];
};

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Запускаем игру с нужными аргументами.
const startGame = () => {
  runGame(text, returnPrime);
};

export default startGame;
