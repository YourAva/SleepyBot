const { ApplicationCommandOptionType, ReactionUserManager } = require("discord.js");

module.exports = {
    name: 'scared',
    description: 'Im a little spooked.',
    // devOnly: Boolean,
    // testOnly: true,
    // deleted: true,
    callback: (client, interaction) => {
      const scaredGifs = [
        "https://media.giphy.com/media/bEVKYB487Lqxy/giphy.gif",
        "https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif",
        "https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif",
        "https://media.giphy.com/media/PGg4D8lGwRz0s/giphy.gif",
        "https://media.giphy.com/media/AFTWK5Qo22V2g/giphy.gif",
        "https://media.giphy.com/media/ENt72LgUE2gV2/giphy.gif",
        "https://media.giphy.com/media/7ut5pB8HmWyZ2/giphy.gif",
        "https://media.giphy.com/media/3o6gEfa23iqP9HfOdW/giphy.gif"
      ];
      
      const gif = scaredGifs[Math.floor(Math.random() * scaredGifs.length)]
  
      interaction.reply(`**[ <@${interaction.member.user.id}> ] Is bricking it!**\n\n${gif}`);
    },
  };