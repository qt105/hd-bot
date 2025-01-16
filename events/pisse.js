const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    const triggerWords = ["Quentin", "Ali", "Juan"];

    if (message.author.bot) return false;

    triggerWords.forEach((word) => {
      if (message.content.includes(word)) {
        message.reply("Ta gueule !");
      }
    });
  },
};
