import { mainGame } from './index.js';

// Генерим случайную последовательность.
const randomProg = () => {
  const d = Math.floor(Math.random() * 10 + 1);
  const start = Math.floor(Math.random() * 100 + 1);
  const arr = [];
  arr.push(start);
  for (let i = 1; i < 10 && i > -10; i += 1) {
    arr.push(start + d * i);
  }
  return arr;
};

// Случайный элемент последовательности превращаем в .. , возвращаем результат в виде массива.
const progression = () => {
  const arr = randomProg();
  const index = Math.floor(Math.random() * 10);
  const correctAnswer = String(arr[index]);
  arr[index] = '..';
  const num = arr.join(' ');
  return [correctAnswer, num];
};

// Запускаем игру с нужными аргументами.
const startGame = () => {
  const text = 'What number is missing in the progression?';
  mainGame(text, progression);
};

export default startGame;
