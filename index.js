var chalk = require("chalk");
var readlineSync = require('readline-sync');

console.log(chalk.blue("Hey you... I am Joy."));
var userName = readlineSync.question(chalk.blue("What should I call you?\n"));
console.log(chalk.redBright("I know your name is " + userName + " but I will call you mine😏👉👈"));
var score = 0;
readlineSync.question(chalk.yellow("Okay " + userName + ", tell me.. Do you know yourself?\n"));
console.log(chalk.yellow("You don't know yourself. I will prove it to you in a few minutes"));

function play(question, answer) {
    var userAnswer = readlineSync.question(chalk.blue(question + "🤔\n"));
    if (userAnswer === answer) {
        console.log(chalk.green("Naaaaaaiiiiiiccccceeeeeee...... + 1 marks for you. 💓"));
        score++;
    }
    else {
        console.log(chalk.red("Boooo! Wrong answer! 🤭"));
        console.log(chalk.magenta("Correct answer: " + answer + "😘"));
        if (score > 0) {
            score--;
        }
    }
    console.log(chalk.cyanBright("Your score is: " + score + " 😉"));
}

var questions = [{
    question: "Who are you?",
    answer: "You are Joy's long lost crush.",
}, {
    question: "Where do you live?",
    answer: "You live in Joy's heart that beats for you.",
}, {
    question: "Why do you exists on this earth?",
    answer: "You exists on this earth so that Joy can send you tons of wholesome memes and fill your heart's and phone's memory.",
}, {
    question: "How do you look?",
    answer: "You look like the most beautiful, adorable, prettiest and sweetest angel who fell from the heaven.",
}, {
    question: "Who is Joy?",
    answer: "Joy is your crush, you just don't know it yet.",
}]

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
}
console.log(chalk.green("See! I told you... you don't know yourself!"));
console.log(chalk.red("Your final score is: " + score));