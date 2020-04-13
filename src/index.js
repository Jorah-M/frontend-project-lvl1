import readlineSync from 'readline-sync';

export default (text, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(text);
  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const [rightAnswer, questionInfo] = getGameData();
    console.log(`Question: ${questionInfo}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
