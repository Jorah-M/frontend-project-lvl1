import { mainGame, generateRandom } from './index.js';

// Генерируем случайное выражение
const calcResult = (num1, sig, num2) => {
  switch (sig) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'mistake';
  }
};

// Вычисляем результат, возвращаем в виде массива.
const calculate = () => {
  const signs = ['+', '-', '*'];
  const random1 = generateRandom(1, 10);
  const random2 = generateRandom(1, 10);
  const sign = generateRandom(0, signs.length);
  const questionString = `${random1} ${signs[sign]} ${random2}`;
  const correctAnswer = String(calcResult(random1, signs[sign], random2));
  return [correctAnswer, questionString];
};

const text = 'What is the result of the expression?';

// Запускаем игру с нужными аргументами.
const startGame = () => {
  mainGame(text, calculate);
};

export default startGame;
