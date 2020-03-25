import { mainGame } from './index.js';

// Генерируем случайное выражение
const calcResult = (num1, sig, num2) => {
  switch (sig) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

// Вычисляем результат, возвращаем в виде массива.
const calc = () => {
  const arr = ['+', '-', '*'];
  const random1 = Math.floor(Math.random() * 10);
  const random2 = Math.floor(Math.random() * 10);
  const sign = Math.floor(Math.random() * Math.floor(3));
  const num = `${random1} ${arr[sign]} ${random2}`;
  const correctAnswer = String(calcResult(random1, arr[sign], random2));
  return [correctAnswer, num];
};

// Запускаем игру с нужными аргументами.
const startGame = () => {
  const text = 'What is the result of the expression?';
  mainGame(text, calc);
};

export default startGame;
