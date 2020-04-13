import runGame from '../index.js';
import generateRandom from '../utils.js';

function findGcd(x, y) {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
}

const getGameData = () => {
  const random1 = generateRandom(2, 20);
  const random2 = generateRandom(2, 20);
  const question = `${random1} ${random2}`;
  const correctAnswer = String(findGcd(random1, random2));
  return [correctAnswer, question];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
