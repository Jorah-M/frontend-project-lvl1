import { runGame } from '../index.js';
import generateRandom from '../utils.js';


const generateProgression = (step, start) => {
  const progression = [];
  const progressionLength = 10;
  progression.push(start);
  for (let i = 1;
    i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getGameData = () => {
  const progression = generateProgression(generateRandom(1, 10), generateRandom(1, 100));
  const orderOfChangingElement = generateRandom(0, 9);
  const correctAnswer = String(progression[orderOfChangingElement]);
  progression[orderOfChangingElement] = '..';
  const question = progression.join(' ');
  return [correctAnswer, question];
};

const gameDescription = 'What number is missing in the progression?';

const startGame = () => {
  runGame(gameDescription, getGameData);
};

export default startGame;
