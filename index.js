const botName = "MUHAMMED BOT";

const commands = {
  ".menu": "📋 MUHAMMED BOT COMMANDS\n.alive\n.help\n.ping\n.owner",
  ".alive": "🔥 MUHAMMED BOT is online!",
  ".help": "Type .menu to see all commands.",
  ".ping": "🏓 Pong! Bot is responding.",
  ".owner": "👑 Owner: Muhammed"
};

function reply(message) {
  return commands[message.toLowerCase()] || "Unknown command. Type .menu";
}

console.log(`${botName} has started!`);
console.log(reply(".menu"));

setInterval(() => {
  console.log(`${botName} is still running...`);
}, 60000);
