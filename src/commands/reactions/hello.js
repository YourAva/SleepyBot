const { ApplicationCommandOptionType, ReactionUserManager } = require("discord.js");

module.exports = {
    name: 'hello',
    description: 'Say hi to chat!',
    // devOnly: Boolean,
    // testOnly: true,
    // deleted: true,
    callback: (client, interaction) => {
      var waveGifs = [
        "https://media.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy.gif",
        "https://media.giphy.com/media/IThjAlJnD9WNO/giphy.gif",
        "https://media.giphy.com/media/Wj7lNjMNDxSmc/giphy.gif",
        "https://media.giphy.com/media/QHxqxXTnmKCl2/giphy.gif",
        "https://media.giphy.com/media/3oz8xTAJIQD6JWfTUc/giphy.gif",
        "https://media.giphy.com/media/VIE492bD0iyDt2l3xG/giphy.gif",
        "https://media.giphy.com/media/U4QxAwXz1CZ5fuiPwU/giphy.gif",
        "https://media.giphy.com/media/l1J9AoMKecyAD0iu4/giphy.gif",
        "https://media.giphy.com/media/bN6kiR2fB7Dlm/giphy.gif",
        "https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif",
        "https://media.giphy.com/media/l0Ex1BL79C4MRMYWQ/giphy.gif"
      ];
      
      const gif = waveGifs[Math.floor(Math.random() * waveGifs.length)]
  
      interaction.reply(`**[ <@${interaction.member.user.id}> ] says hey!**\n\n${gif}`);
    },
  };