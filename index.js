#! /usr/bin/env node
// shebang for npm script execution
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.cyanBright("\n\t Lets count some words\n"));
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your text to count the words:",
    },
]);
console.log(chalk.greenBright(answers.Sentence));
const words = answers.Sentence.trim().split(" ");
//this will print arrays of words to the terminal
console.log(chalk.bold.bgGray(words));
//this will print number of words in a sentence
console.log(chalk.bold.redBright(`Your sentence word count is ${words.length}`));
