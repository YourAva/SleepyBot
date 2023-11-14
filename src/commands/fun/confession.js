const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: 'confession',
    description: 'Confess something and have it repeated annonymously in the SleepyBot discord server!',
    // devOnly: Boolean,
    // testOnly: true,
    options: [
        {
            name:"confession",
            description:"Confess your sins my child",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    // deleted: true,
  
    callback: (client, interaction) => {
        const confession = interaction.options.get('confession').value;
        const channel = client.channels.cache.get(process.env.CONFESSION_CHANNEL)
        
        channel.send(`**A new confession has been made!**\n\n\"${confession}\"`)
        interaction.reply({content:"Your confession has been sent to the official SleepyBot discord server.",ephemeral: true});
    },
  };