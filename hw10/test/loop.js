const inputEl = document.querySelector('input');
const outputEl = document.querySelector('output');

const list = [];

function processCommand(command, args) {
  switch (command) {
    case 'list':
      outputEl.textContent = list.map((item, index) => `${index + 1}. ${item}`).join('\n');
      break;
    case 'add':
      list.push(args.join(' '));
      outputEl.textContent = `"${args.join(' ')}" 已添加到列表。`;
      break;
    case 'remove':
      const indexToRemove = parseInt(args[0]) - 1;
      if (isNaN(indexToRemove) || indexToRemove < 0 || indexToRemove >= list.length) {
        outputEl.textContent = `无效值 "${args[0]}", 请重试。`;
      } else {
        const removedItem = list.splice(indexToRemove, 1)[0];
        outputEl.textContent = `"${removedItem}" 已从列表中移除。`;
      }
      break;
    case 'clear':
      list.length = 0;
      outputEl.textContent = '列表已清空。';
      break;
    case 'help':
      outputEl.textContent = '命令列表：\n' +
        'list - 列出所有列表项\n' +
        'add <item> - 添加一个新的列表项\n' +
        'remove <number> - 移除一个列表项\n' +
        'clear - 清空列表\n' +
        'help - 列出所有命令';
      break;
    default:
      outputEl.textContent = `未知命令 "${command}"，请尝试输入 "help"。`;
      break;
  }
}

inputEl.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) { // Enter key
    const input = inputEl.value.trim();
    if (input === '') {
      return;
    }
    const [command, ...args] = input.split(' ');
    processCommand(command, args);
    inputEl.value = '';
  }
});

outputEl.textContent = '请输入 "help" 查看命令列表。';
