const { ApplicationCommandOptionType, ReactionUserManager } = require("discord.js");

module.exports = {
    name: 'excited',
    description: 'Feeling a little excited!',
    // devOnly: Boolean,
    // testOnly: true,
    // deleted: true,
    callback: (client, interaction) => {
    const excitedGifs = [
        "https://media.giphy.com/media/l0amJzVHIAfl7jMDos/giphy.gif",
        "https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif",
        "https://media.giphy.com/media/S9i8jJxTvAKVHVMvvW/giphy.gif",
        "https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif",
        "https://media.giphy.com/media/UO5elnTqo4vSg/giphy.gif",
        "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
        "https://media.giphy.com/media/hZj44bR9FVI3K/giphy.gif",
        "https://media.giphy.com/media/CAxbo8KC2A0y4/giphy.gif",
        "https://media.giphy.com/media/3ndAvMC5LFPNMCzq7m/giphy.gif"
    ];
      
      const gif = excitedGifs[Math.floor(Math.random() * excitedGifs.length)]
  
      interaction.reply(`**[ <@${interaction.member.user.id}> ] IS EXCITEEEEEED!!!!**\n\n${gif}`);
    },
  };