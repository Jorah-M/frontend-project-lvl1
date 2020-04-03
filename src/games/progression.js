import { runGame } from '../index.js';
import generateRandom from '../utils.js';


// Генерим случайную последовательность.
const generateProgression = (step, start) => {
  const arr = [];
  arr.push(start);
  for (let progressionLength = 1;
    progressionLength < 10 && progressionLength > -10; progressionLength += 1) {
    arr.push(start + step * progressionLength);
  }
  return arr;
};


// Случайный элемент последовательности превращаем в .. , возвращаем результат в виде массива.
const changeProgression = () => {
  const arr = generateProgression(generateRandom(1, 10), generateRandom(1, 100));
  const elementCount = generateRandom(1, 10);
  const correctAnswer = String(arr[elementCount - 1]);
  arr[elementCount - 1] = '..';
  const question = arr.join(' ');
  return [correctAnswer, question];
};

const text = 'What number is missing in the progression?';

// Запускаем игру с нужными аргументами.
const startGame = () => {
  runGame(text, changeProgression);
};

export default startGame;
