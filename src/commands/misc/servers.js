module.exports = {
    name: 'serveramount',
    description: 'Check how many servers that the SleepyBot discord bot is in.',
    // devOnly: Boolean,
    // testOnly: true,
    // options: Object[],
    // deleted: true,
  
    callback: (client, interaction) => {
      interaction.reply({content: `I am in ${client.guilds.cache.size} servers currently! 💖\n\nThank you to everyone supporting me so far!`, ephemeral: true});
    },
  };