import { mainGame } from './index.js';

// Генерируем случайное число, проверяем, четное ли; результат возвращаем в виде массива.
const even = () => {
  const num = Math.floor(Math.random() * 1000);
  if (num % 2 === 0) {
    const correctAnswer = 'yes';
    return [correctAnswer, num];
  } const correctAnswer = 'no';
  return [correctAnswer, num];
};

// Запускаем игру с нужными аргументами.
const startGame = () => {
  const text = 'Answer "yes" if the number is even, otherwise answer "no".';
  mainGame(text, even);
};

export default startGame;
