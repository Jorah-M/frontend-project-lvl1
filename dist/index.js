import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const even = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;

  while (i <= 2 && i > -10) {
    const random = Math.floor(Math.random() * 1000);
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (random % 2 === 0) {
      if (userAnswer !== 'yes') {
        i -= 5;
        return console.log(`"${userAnswer}" if wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
      }

      i += 1;
      console.log('Correct!');
    }

    if (random % 2 !== 0) {
      if (userAnswer !== 'no') {
        i -= 5;
        return console.log(`"${userAnswer}" if wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
      }

      i += 1;
      console.log('Correct!');
    }
  }

  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const calc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let i = 0;

  while (i <= 2 && i > -10) {
    const random1 = Math.floor(Math.random() * 100);
    const random2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${random1} + ${random2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === random1 + random2) {
      i += 1;
      console.log('Correct!');
    }

    i -= 5;
    return `${userAnswer} is wrong answer ;(. Corretn answer was ${random1 + random2}.\nLet's try again, ${userName}!`;
  }

  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export { greeting, even, calc };