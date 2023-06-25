const {ApplicationCommandOptionType } = require("../../index");

module.exports = {
    name: 'console',
    description: 'Say something to the devs in the console!',
    // devOnly: Boolean,
    // testOnly: true,
    options: [
      {
        name: "message",
        description: "The message to send to the dev console.",
        type: ApplicationCommandOptionType.String,
        required: true
      },
    ],
    // deleted: true,
    callback: (client, interaction) => {
      const user = (interaction.member.user.tag);
      const id = (interaction.member.user.id);
      const message = (interaction.options.get("message").value);
      
      console.log(`\u001b[1;36m${user} -- [ "${message}" ] -- ${id}\u001b[0m`)
      interaction.reply({ content: "I sent your message to the dev console! <3", ephemeral: true});
    },
  };