const { ApplicationCommandOptionType, ReactionUserManager } = require("discord.js");

module.exports = {
    name: 'silly',
    description: 'For when youre feeling a little silly.',
    // devOnly: Boolean,
    // testOnly: true,
    // deleted: true,
    callback: (client, interaction) => {
    const sillyGifs = [
        "https://media.giphy.com/media/26xBJYPpNjdTYElOM/giphy.gif",
        "https://media.giphy.com/media/epnHmbfUFaBkk/giphy.gif",
        "https://media.giphy.com/media/5Vy3WpDbXXMze/giphy.gif",
        "https://media.giphy.com/media/VjlhgT6zZGrqE/giphy.gif",
        "https://media.giphy.com/media/6bAZXey5wNzBC/giphy.gif",
        "https://media.giphy.com/media/j85AoJKs7rhmLlTGz7/giphy.gif"
    ];
      
      const gif = sillyGifs[Math.floor(Math.random() * sillyGifs.length)]
  
      interaction.reply(`**[ <@${interaction.member.user.id}> ] Is feeling a little silly..!**\n\n${gif}`);
    },
  };