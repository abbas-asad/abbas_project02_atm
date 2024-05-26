#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 33441;
console.log(`Your current balance is: ${myBalance}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number",
    },
]);
if (pinAnswer.pin == myPin) {
    console.log("Correct pin code!!!");
    let optionAns = await inquirer.prompt([
        {
            name: "option",
            message: "What you want to do?",
            type: "list",
            choices: ["fast cash", "withdraw", "check balance"],
        },
    ]);
    if (optionAns.option === "fast cash") {
        let fcash = await inquirer.prompt([
            {
                name: "cash",
                message: "How much cash do you want?",
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        let remainingBalanceFcash = myBalance - fcash.cash;
        console.log(`Your remaining balance is: ${remainingBalanceFcash}`);
    }
    else if (optionAns.option === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            let remainingBalanceWdraw = myBalance - amountAns.amount;
            console.log(`Your remaining balance is: ${remainingBalanceWdraw}`);
        }
    }
    else if (optionAns.option === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin number");
}
