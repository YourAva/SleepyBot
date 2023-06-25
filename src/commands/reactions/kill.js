const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: 'kill',
    description: 'Commit a crime.',
    // devOnly: Boolean,
    // testOnly: true,
    // deleted: false,
    options: [
        {
            name:"killed",
            description:"choose who to kill!",
            type: ApplicationCommandOptionType.User,
            required: "true"
        }
    ],
    // deleted: true,
    callback: (client, interaction) => {
      const killed = interaction.options.get('killed').value;
      const killGif = [`https://tenor.com/bRYL5.gif`,`https://tenor.com/bJVou.gif`,`https://tenor.com/9SFT.gif`];

      if (killed === "1083481300612169799") {
        interaction.reply(`**[ <@${interaction.member.user.id}> ] just killed [ Sl-** ***ME!?*** **WTF BRO- ]**\n\n${killGif[Math.floor(Math.random() * killGif.length)]}`)
        return;
      } if (killed === interaction.member.user.id) {
        interaction.reply(`**[ <@${interaction.member.user.id}> ] just killed... Themself..? What?**\n\nhttps://tenor.com/8Hw2.gif`)
        return;
      }
  
      interaction.reply(`**[ <@${interaction.member.user.id}> ] just killed [ <@${killed}> ]**\n\n${killGif[Math.floor(Math.random() * killGif.length)]}`);
    },
  };