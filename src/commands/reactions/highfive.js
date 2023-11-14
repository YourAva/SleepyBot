const { ApplicationCommandOptionType, ReactionUserManager } = require("discord.js");

module.exports = {
    name: 'highfive',
    description: 'High five bro!',
    // devOnly: Boolean,
    // testOnly: true,
    // deleted: false,
    options: [
        {
            name:"recipient",
            description:"choose who to dap up!",
            type: ApplicationCommandOptionType.User,
            required: "true"
        }
    ],
    // deleted: true,
    callback: (client, interaction) => {
      const recipient = interaction.options.get('recipient').value;
      const highfive = [`https://media.giphy.com/media/l0ErFafpUCQTQFMSk/giphy.gif`, `https://media.giphy.com/media/b5L1Lt3k4hGNDZWVIw/giphy.gif`, `https://media.giphy.com/media/6FrujVG4mafRETQTal/giphy.gif`, `https://media.giphy.com/media/3oKIPbOaTdyWc8iUWA/giphy.gif`, `https://media.giphy.com/media/3oKIPbOaTdyWc8iUWA/giphy.gif`, `https://media.giphy.com/media/Ch7el3epcW3Wo/giphy.gif`, `https://media.giphy.com/media/fm4WhPMzu9hRK/giphy.gif`];

      if (recipient === client.user.id) {
        interaction.reply(`**[ <@${interaction.member.user.id}> ] Yeah bro! High five! [ <@${client.user.id}> ]**\n\n${highfive[Math.floor(Math.random() * highfive.length)]}`)
        return;
      } if (recipient === interaction.member.user.id) {
        interaction.reply(`**[ <@${interaction.member.user.id}> ] just high fived themself... That's kinda sad. **\n\nhttps://media.giphy.com/media/3ohc12KF4xplvluges/giphy.gif`)
        return;
      }
  
      interaction.reply(`**[ <@${interaction.member.user.id}> ] just gave a ccccccccRISP high-five to [ <@${recipient}> ]**\n\n${highfive[Math.floor(Math.random() * highfive.length)]}`);
    },
  };