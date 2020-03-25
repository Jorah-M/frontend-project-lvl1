import { mainGame } from './index.js'; // Находим наибольший делитель

function nodFunc(x, y) {
  if (y > x) return nodFunc(y, x);
  if (!y) return x;
  return nodFunc(y, x % y);
} // Генерируем два случайных числа, вощвращаем результат в виде массива.


const gcd = () => {
  const random1 = Math.floor(Math.random() * 10 + 1);
  const random2 = Math.floor(Math.random() * 10 + 1);
  const num = `${random1} ${random2}`;
  const correctAnswer = String(nodFunc(random1, random2));
  return [correctAnswer, num];
}; // Запускаем игру с нужными аргументами.


const startGame = () => {
  const text = 'Find the greatest common divisor of given numbers.';
  mainGame(text, gcd);
};

export default startGame;