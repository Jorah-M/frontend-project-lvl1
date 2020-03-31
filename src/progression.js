import { mainGame, generateRandom } from './index.js';

// Генерим случайную последовательность.
const generateProgression = () => {
  const step = generateRandom(1, 10);
  const start = generateRandom(1, 100);
  const arr = [];
  arr.push(start);
  for (let i = 1; i < 10 && i > -10; i += 1) {
    arr.push(start + step * i);
  }
  return arr;
};

// Случайный элемент последовательности превращаем в .. , возвращаем результат в виде массива.
const changeProgression = () => {
  const arr = generateProgression();
  const index = generateRandom(1, 10);
  const correctAnswer = String(arr[index]);
  arr[index] = '..';
  const questionString = arr.join(' ');
  return [correctAnswer, questionString];
};

const text = 'What number is missing in the progression?';

// Запускаем игру с нужными аргументами.
const startGame = () => {
  mainGame(text, changeProgression);
};

export default startGame;
