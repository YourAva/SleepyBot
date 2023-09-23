const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: 'remindme',
    description: 'Remind you of something in a set amount of time.',
    // devOnly: Boolean,
    // testOnly: true,
    options: [
        {
            name:"time",
            description:"Time until you want to be reminded (Minutes)",
            type: ApplicationCommandOptionType.Number,
            required: true
        },
        {
            name:"remindermessage",
            description:"What do you want to be reminded of?",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    // deleted: true,
  
    callback: (client, interaction) => {
        const remindermessage = (interaction.options.get('remindermessage').value);
        const time = (interaction.options.get('time').value) * 60 * 1000; //Convert to milliseconds
        const user = client.users.cache.get(interaction.member.user.id);
        if(time > 0){ //Makes sure the number is valid for wait time.
            if(interaction.options.get('time').value) {
                interaction.reply({content: `In ${interaction.options.get('time').value} minute i'll remind you: "${remindermessage}"`, ephemeral: true})
            } else {
                interaction.reply({content: `In ${interaction.options.get('time').value} minutes i'll remind you: "${remindermessage}"`, ephemeral: true})
            }

            setTimeout(() => {
                user.send(`‼⏰**Heya! You set a reminder earlier..!**⏰‼\n\n"${remindermessage}"`)
            }, time);
        } else {
            interaction.reply({content: `You entered an invalid time! It must be above 0.`, ephemeral: true})
        }
    },
  };