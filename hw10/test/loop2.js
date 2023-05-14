const readline = require('readline')
const { spawn, exec } = require('child_process')

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

let history = [];

function runCommand(command) {
        history.push(command);

        const[cmd, ...args] = command.split(/\s+/);

        if (cmd === 'exit') {
                rl.close();
        } else if (cmd === 'history'){
                console.log
        }
}