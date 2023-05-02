import inquirer from "inquirer"
import figlet from "figlet";
import chalk from "chalk";
import chalkanimation from "chalk-animation";

const sleep = () => new Promise((resolve) => {
    return setTimeout(resolve, 1000)
})

let wellcome = chalkanimation.rainbow(figlet.textSync("TO - DO  LIST"));
await sleep()
wellcome.stop();

const todoList: string[] = [];

const Todo = async () => {
    let todoQue = await inquirer.prompt({
        type: "input",
        name: "todo",
        message: "What you want to add today TO_DO list :"
    });
    const { todo } = todoQue
    todoList.push(todo);
    console.log(todoList);
}

do {
    await Todo();
    var todoloop = await inquirer.prompt({
        type: "input",
        name: "again_TODO",
        message: chalk.blue("Did you want to add more, Press (y) else (n) :"),
        default: 'y' || 'Y'
    });
} while (todoloop.again_TODO === 'y' || todoloop.again_TODO === 'Y' || todoloop.again_TODO === 'yes' || todoloop.again_TODO === 'Yes');

console.log(chalk.yellow('TO_DO LIST ') + "=", todoList);

