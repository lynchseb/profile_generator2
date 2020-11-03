const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userProfile = {}

rl.question("What's your name?", (answer) => {
  userProfile["name"] = answer;
  rl.question("What's an activity you like doing?", (answer) => {
    userProfile["activity"] = answer;
    rl.question("What do you listen to while doing that?", (answer) => {
      userProfile["music"] = answer;
      rl.question("What meal is your favourite (eg: dinner, brunch, etc...)?", (answer) => {
        userProfile["meal"] = answer;
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          userProfile["dish"] = answer;
          rl.question("What sport is your absolute favourite?", (answer) => {
            userProfile["sport"] = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              userProfile["superpower"] = answer;

              console.log(`Nifty profile! Your name is ${userProfile.name}, your favourite activitiy is ${userProfile.activity}, the music you listen to while doing that is ${userProfile.music}. Your favourite meal of the day is ${userProfile.meal}, your favourite dish for that meal is ${userProfile.dish}. Your favourite sport is ${userProfile.sport}. Your superpower is ${userProfile.superpower},`);
              rl.close();
              // console.log(userProfile);
            });
          });
        });
      });
    });
  });
});