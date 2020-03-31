import { mainGame, generateRandom } from './index.js';

// Проверяем, четное ли число.
const isEven = (num) => (num % 2 === 0);

// Генерируем случайное число; результат его проверки на четность возвращаем в виде массива.
const getEven = () => {
  const num = generateRandom(10, 100);
  return (isEven(num)) ? ['yes', num] : ['no', num];
};

const text = 'Answer "yes" if the number is even, otherwise answer "no".';

// Запускаем игру с нужными аргументами.
const startGame = () => {
  mainGame(text, getEven);
};

export default startGame;
