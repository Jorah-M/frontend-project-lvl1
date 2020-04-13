import runGame from '../index.js';
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
  const progressionLength = 10;
  const progression = generateProgression(
    generateRandom(1, progressionLength),
    generateRandom(1, 100),
  );
  const hiddenElementIndex = generateRandom(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [correctAnswer, question];
};

const gameDescription = 'What number is missing in the progression?';

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
