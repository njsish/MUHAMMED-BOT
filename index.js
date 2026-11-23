const botName = "MUHAMMED BOT";

const commands = {
  ".menu": "Available commands: .menu, .alive, .help, .ping",
  ".alive": "🔥 MUHAMMED BOT is alive!",
  ".help": "Contact the bot owner for help.",
  ".ping": "Pong! 🏓"
};

function reply(message) {
  return commands[message.toLowerCase()] || "Unknown command. Type .menu";
}

console.log(botName + " is ready!");

console.log(reply(".menu"));
