import { runGame } from '../index.js';
import generateRandom from '../utils.js';


const isEven = (num) => (num % 2 === 0);

const getGameData = () => {
  const num = generateRandom(10, 100);
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';
  return [answer, question];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  runGame(gameDescription, getGameData);
};

export default startGame;
