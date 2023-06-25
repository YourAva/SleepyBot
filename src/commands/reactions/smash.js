const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: 'smash',
    description: 'Oooooh yeeeeah',
    // devOnly: Boolean,
    // testOnly: true,
    // deleted: true,
    options: [
        {
            name:"smashed",
            description:"Who we bangin'!?",
            type: ApplicationCommandOptionType.User,
            required: "true"
        }
    ],
    // deleted: true,
    callback: (client, interaction) => {
      const smashed = interaction.options.get('smashed').value;
      const sexGif = [`https://tenor.com/byHS0.gif`,`https://tenor.com/bQP0e.gif`,`https://tenor.com/bOEnt.gif`,`https://tenor.com/bN0Ka.gif`,`https://tenor.com/bQ9ry.gif`];

      if (smashed === "1083481300612169799") {
        interaction.reply(`**[ <@${interaction.member.user.id}> ] just sexed me :smirk:**\n\n${sexGif[Math.floor(Math.random() * sexGif.length)]}`)
        return;
      } if (smashed === interaction.member.user.id) {
        interaction.reply(`**[ <@${interaction.member.user.id}> ] just sexed... Nope... They just masturbated.**\n\nhttps://tenor.com/bxMjl.gif`)
        return;
      }
  
      interaction.reply(`**[ <@${interaction.member.user.id}> ] just did the sex with [ <@${smashed}> ]**\n\n${sexGif[Math.floor(Math.random() * sexGif.length)]}`);
    },
  };