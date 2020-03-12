import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const even = () => {

};

export default greeting;
export default even;