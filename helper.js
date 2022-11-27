import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
export async function indexUi() {
    console.clear();
    const msg = 'Kallu ka Letter';
    figlet(msg, (err, data) => {
        console.log(gradient.atlas(data));
    });
    await sleep();
}
async function usrInput1() {
    let input1 = await inquirer.prompt({
        name: 'input1',
        type: "number",
        message: 'Please Input 1st Number:'
    });
    return input1.input1;
}
async function usrInput2() {
    let input2 = await inquirer.prompt({
        name: 'input2',
        type: "number",
        message: 'Please Input 2nd Number:'
    });
    return input2.input2;
}
async function selectOperator() {
    let oprerator = await inquirer.prompt({
        name: 'opr',
        type: "list",
        message: 'Please Select Operator:',
        choices: [
            '+', '-', '/', '*', '% modulo'
        ]
    });
    return oprerator.opr;
}
const spinner = createSpinner('checking answer');
export async function startProgram() {
    await indexUi();
    let ch = false;
    do {
        let ui = await usrInput1();
        let u2 = await usrInput2();
        let opr = await selectOperator();
        if (opr == "+") {
            spinner.start();
            await sleep();
            spinner.success({
                text: `${ui} + ${u2} = ${ui + u2}`
            });
        }
        else if (opr == "-") {
            spinner.start();
            await sleep();
            console.log(`${ui} - ${u2} = ${ui - u2}`);
        }
        else if (opr == "/") {
            spinner.start();
            await sleep();
            spinner.success({
                text: `${ui} / ${u2} = ${ui / u2}`
            });
        }
        else if (opr == "*") {
            spinner.start();
            await sleep();
            spinner.success({
                text: `${ui} x ${u2} = ${ui * u2}`
            });
        }
        else if (opr == "%") {
            spinner.start();
            await sleep();
            console.log(`${ui} % ${u2} = ${ui % u2}`);
        }
        else {
            spinner.start();
            await sleep();
            spinner.error({ text: `🤬🤬😡 Invalid!` });
        }
        let choice = await inquirer.prompt({
            name: 'cliInput',
            type: 'input',
            message: chalk.greenBright('Do you want to continue?, Y to continue else exit')
        });
        if (choice.cliInput == 'Y') {
            ch = true;
        }
        else {
            ch = false;
        }
    } while (ch);
}
