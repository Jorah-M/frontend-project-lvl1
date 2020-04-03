import { runGame } from '../index.js';
import generateRandom from '../utils.js';

// Находим наибольший делитель
function findGcd(x, y) {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
}

// Генерируем два случайных числа, вощвращаем результат в виде массива.
const getGcd = () => {
  const random1 = generateRandom(2, 20);
  const random2 = generateRandom(2, 20);
  const question = `${random1} ${random2}`;
  const correctAnswer = String(findGcd(random1, random2));
  return [correctAnswer, question];
};

const text = 'Find the greatest common divisor of given numbers.';

// Запускаем игру с нужными аргументами.
const startGame = () => {
  runGame(text, getGcd);
};

export default startGame;
