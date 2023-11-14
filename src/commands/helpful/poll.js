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
            name: 'opt1',
            description: 'What is option 1?',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'opt2',
            description: 'What is option 2?',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'opt1emoji',
            description: 'Give an emoji for people to react with if they wish to vote for option 1',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'opt2emoji',
            description: 'Give an emoji for people to react with if they wish to vote for option 2',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    // deleted: true,
  
    callback: async (client, interaction) => {
        const poll = (interaction.options.get('poll').value);
        const opt1 = (interaction.options.get('opt1').value);
        const opt2 = (interaction.options.get('opt2').value);
        const Opt1Emoji = (interaction.options.get('opt1emoji').value);
        const Opt2Emoji = (interaction.options.get('opt2emoji').value);
        const message = await interaction.reply({ content: `**${poll}**\n\n${Opt1Emoji} -- ${opt1}\n${Opt2Emoji} -- ${opt2}`, fetchReply: true})
        message.react(Opt1Emoji);
        message.react(Opt2Emoji);
    },
  };