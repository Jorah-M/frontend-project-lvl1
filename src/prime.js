import { mainGame, generateRandom } from './index.js';

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
  return (count === 2);
};

// Генерим слуайное число, возвращаем результат в виде массива.
const returnPrime = () => {
  const temp = generateRandom(2, 15);
  const questionString = `${temp}`;
  return (isPrime(temp)) ? ['yes', questionString] : ['no', questionString];
};

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Запускаем игру с нужными аргументами.
const startGame = () => {
  mainGame(text, returnPrime);
};

export default startGame;
