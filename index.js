#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNum = Math.floor(Math.random() * 10);
console.log(chalk.bold.magenta("\n \tWelcome to Numeric Riddle Game\n"));
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: chalk.green `\tPlease Guess a number b/w 1 to 10:`,
    },
]);
if (answer.userguessednumber === randomNum) {
    console.log(chalk.cyanBright("\n \tCongratulations! You guessed right number.\n"));
}
else {
    console.log(chalk.redBright("\n \tOops!!! You guessed wrong number. Please try again.\n"));
}
console.log(chalk.bold.yellow(`\n \tThe Answer is: ${randomNum}\n`));
