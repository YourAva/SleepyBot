const {ApplicationCommandOptionType } = require("../../index");

module.exports = {
    name: 'poll',
    description: 'Start a poll!',
    // devOnly: Boolean,
    // testOnly: true,
    options: [
        {
            name: 'poll',
            description: 'Give the poll question!',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'agree',
            description: 'Give an emoji for people to react with if they agree',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'disagree',
            description: 'Give an emoji for people to react with if they disagree',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    // deleted: true,
  
    callback: async (client, interaction) => {
        const poll = (interaction.options.get('poll').value);
        const agree = (interaction.options.get('agree').value);
        const disagree = (interaction.options.get('disagree').value);
        const message = await interaction.reply({ content: `**${poll}**\n\n${agree} -- Yup!\n${disagree} -- Nah.`, fetchReply: true})
        message.react(agree);
        message.react(disagree);
    },
  };