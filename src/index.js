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

const calcResult = (num1, sig, num2) => {
  switch (sig) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const calc = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let i = 0;
  const arr = ['+', '-', '*'];
  while (i <= 2 && i > -10) {
    const random1 = Math.floor(Math.random() * 10);
    const random2 = Math.floor(Math.random() * 10);
    const sign = Math.floor(Math.random() * Math.floor(3));
    console.log(`Question: ${random1} ${arr[sign]} ${random2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === calcResult(random1, arr[sign], random2)) {
      i += 1;
      console.log('Correct!');
    } else {
      i -= 12;
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was ${calcResult(random1, arr[sign], random2)}.\nLet's try again, ${userName}!`);
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export { greeting, even, calc };
