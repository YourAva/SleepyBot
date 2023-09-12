const {ApplicationCommandOptionType } = require("../../index");

module.exports = {
    name: 'binary-convert',
    description: 'Convert binary to an integer!',
    // devOnly: Boolean,
    // testOnly: true,
    options: [
        {
          name: "binary",
          description: `Provide the binary to convert!`,
          type: ApplicationCommandOptionType.String,
          required: "true"
        }
    ],
    // deleted: true,
    callback: (client, interaction) => {
      const binary = (interaction.options.get('binary').value);
      const user = (interaction.member.user.id);
      
      const binaryPattern = /^[01]+$/;

			if (binaryPattern.test(binary)) {
				const binaryInteger = parseInt(binary, 2);
				interaction.reply(`<@${user}> converted -- **${binary}**\n\nThe answer is ...🧮  **${binaryInteger}**  🧮...`)
			} else {
				interaction.reply({content: `Looks like you didn't put a valid binary integer..! Please try again and only use 1's and 0's.`, ephemeral: true})
			}
    },
  };