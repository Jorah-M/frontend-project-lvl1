import readlineSync from 'readline-sync';

const greeting = () => readlineSync.question('May I have your name? ');

const isEven = num => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const even = () => {
  const name = greeting();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;

  while (i < 3) {
    const temp = Math.floor(Math.random() * 1000);
    console.log(`Question: ${temp}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(temp);

    if (userAnswer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return `"${userAnswer}" if wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`;
    }
  }

  return `Congratulations, ${name}!`;
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
  const name = greeting();
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let i = 0;
  const arr = ['+', '-', '*'];

  while (i < 3) {
    const random1 = Math.floor(Math.random() * 10);
    const random2 = Math.floor(Math.random() * 10);
    const sign = Math.floor(Math.random() * Math.floor(3));
    console.log(`Question: ${random1} ${arr[sign]} ${random2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(calcResult(random1, arr[sign], random2));

    if (userAnswer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return `"${userAnswer}" if wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`;
    }
  }

  return `Congratulations, ${name}!`;
};

function nodFunc(x, y) {
  if (y > x) return nodFunc(y, x);
  if (!y) return x;
  return nodFunc(y, x % y);
}

const gcd = () => {
  const name = greeting();
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;

  while (i < 3) {
    const random1 = Math.floor(Math.random() * 10 + 1);
    const random2 = Math.floor(Math.random() * 10 + 1);
    const correctAnswer = String(nodFunc(random1, random2));
    console.log(`Question: ${random1} ${random2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return `"${userAnswer}" is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`;
    }
  }

  return `Congratulations, ${name}!`;
};

const randomProg = () => {
  const d = Math.floor(Math.random() * 10 + 1);
  const start = Math.floor(Math.random() * 100 + 1);
  const arr = [];
  arr.push(start);

  for (let i = 1; i < 10 && i > -10; i += 1) {
    arr.push(start + d * i);
  }

  return arr;
};

const progression = () => {
  const name = greeting();
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let i = 0;

  while (i < 3) {
    const arr = randomProg();
    const index = Math.floor(Math.random() * 10);
    const correctAnswer = String(arr[index]);
    arr[index] = '..';
    console.log(arr.join(' '));
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return `"${userAnswer}" is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`;
    }
  }

  return `Congratulations, ${name}!`;
};

const isPrime = num => {
  let i = 1;
  let count = 0;

  while (i <= num) {
    if (num % i === 0) {
      i += 1;
      count += 1;
    } else {
      i += 1;
    }
  }

  if (count === 2) {
    return 'yes';
  }

  return 'no';
};

const prime = () => {
  const name = greeting();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;

  while (i < 3) {
    const temp = Math.floor(Math.random() * 10 + 1);
    console.log(`Question: ${temp}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(temp);

    if (userAnswer === correctAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return `"${userAnswer}" is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`;
    }
  }

  return `Congratulations, ${name}!`;
};

export { greeting, even, calc, gcd, progression, randomProg, prime };