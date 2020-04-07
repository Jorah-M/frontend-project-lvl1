import { runGame } from '../index.js';
import generateRandom from '../utils.js';


const isPrime = (num) => {
  if (num <= 0 || num === 1) {
    return false;
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getGameData = () => {
  const temp = generateRandom(2, 15);
  const question = String(temp);
  const answer = isPrime(temp) ? 'yes' : 'no';
  return [answer, question];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  runGame(gameDescription, getGameData);
};

export default startGame;
