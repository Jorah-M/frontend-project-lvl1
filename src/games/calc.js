import runGame from '../index.js';
import generateRandom from '../utils.js';

const calculateResult = (num1, num2, sign) => {
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

const getGameData = () => {
  const signs = ['+', '-', '*'];
  const random1 = generateRandom(1, 10);
  const random2 = generateRandom(1, 10);
  const randomSign = generateRandom(0, signs.length - 1);
  const question = `${random1} ${signs[randomSign]} ${random2}`;
  const correctAnswer = String(calculateResult(random1, random2, signs[randomSign]));
  return [correctAnswer, question];
};

const gameDescription = 'What is the result of the expression?';

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
