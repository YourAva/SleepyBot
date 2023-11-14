module.exports = {
    name: 'membercount',
    description: 'Find out the total number of members in your server.',
    // devOnly: Boolean,
    // testOnly: true,
    // options: Object[],
    // deleted: true,
    callback: (client, interaction) => {
      const members = (interaction.guild.memberCount)
      
      interaction.reply(`There are **[ ${members} ]** members in the server.`)
    },
  };