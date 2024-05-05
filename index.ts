#! /usr/bin/env node
import inquirer from "inquirer"

// 1) Computer will a generated number //Done

// 2) User input guessing number // Done

// 3) compare user input with computer generated number & show result //Done

const randomNumber=  Math.floor(Math.random()* 8 + 1); 


    const answers = await inquirer.prompt([
    {
        name: " User Guessed number",
        type: "number",
        message: "Please guess a munber btw 1 - 8:",
    }
    ]);
    console.log(answers);

    if(answers.UserGuessednumber ===  randomNumber )
        {
           console.log("Congrats your GuessedNumber is correct");

    } else{

    console.log("sorry you guess wrong number Please try again for better luck ");
    
    }

