import { runGame } from '../index.js';
import generateRandom from '../utils.js';

// Генерируем случайное выражение
const calcResult = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

// Вычисляем результат, возвращаем в виде массива.
const generateAndReturnAnswer = () => {
  const signs = ['+', '-', '*'];
  const random1 = generateRandom(1, 10);
  const random2 = generateRandom(1, 10);
  const sign = generateRandom(0, signs.length);
  const question = `${random1} ${signs[sign]} ${random2}`;
  const correctAnswer = String(calcResult(random1, signs[sign], random2));
  return [correctAnswer, question];
};

const text = 'What is the result of the expression?';

// Запускаем игру с нужными аргументами.
const startGame = () => {
  runGame(text, generateAndReturnAnswer);
};

export default startGame;
