const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name?     ', (answerName) => {
  rl.question(`When's your birthday?    `, (birthdayAnswer) => {
   rl.question(`What's your nickname?     `, (answerNickName) => {
    rl.question(`Whats are you doing during quarantine?    `, (answerActivity) => {
      rl.question("what is your favourite sport?    ", (answerSport) => {
        console.log(`Hello ${answerName}!, Your birthday is ${birthdayAnswer}. Your friends like to call you ${answerNickName}. You are keeping busy ${answerActivity} during these hard times, but if you had the opportunity to do something, you would love to be playing ${answerSport}!`)
        rl.close();
          });
        });
      });
    });
  });



// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!