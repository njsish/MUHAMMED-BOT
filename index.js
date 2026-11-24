const readline = require("readline");

const botName = "MM BOT";
const owner = "Muhammed";

console.log(`🔥 ${botName} has started!`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "You: "
});

function handleCommand(message) {
  const command = message.trim().toLowerCase();

  switch (command) {
    case ".menu":
      return `
👑 ${botName}

.menu - Show commands
.alive - Check bot status
.ping - Test response
.owner - Bot owner
.help - Get help
`;

    case ".alive":
      return "🔥 MM BOT is alive!";

    case ".ping":
      return "🏓 Pong!";

    case ".owner":
      return `👑 Bot owner: ${owner}`;

    case ".help":
      return "Type .menu to see available commands.";

    default:
      return "Unknown command. Type .menu";
  }
}

rl.prompt();

rl.on("line", (message) => {
  console.log(`${botName}: ${handleCommand(message)}`);
  rl.prompt();
});
