// This function is ran when the bot is put online. It gives a little information inside the console and sets the
// bot's status to whatever is wanted. ((Line 6 to edit))
const { version } = require('discord.js');
module.exports = (client) => {
    console.log(`${client.user.tag}, has been enabled..! ✅\n\n👑 Server(s): ${client.guilds.cache.size}\n🤓 Discord.js Version: ${version}`);
};