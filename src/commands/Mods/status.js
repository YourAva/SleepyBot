const {EmbedBuilder, ApplicationCommandOptionType, ActivityType} = require("discord.js");

module.exports = {
    name: 'status',
    description: 'Give the status of the Select Servers.',
    options: [
        {
            name: 'status',
            description: 'Give the status of the server',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {name: 'Operational', value:'operational'},
                {name: 'Down', value:'down'},
                {name: 'Maintenance', value:'maintenance'},
            ]
          },
          {
            name: 'pingall',
            description: 'Ping everyone about the current server status?',
            type: ApplicationCommandOptionType.Boolean,
            required: false,
          },
          {
            name: 'statusmessage',
            description: 'The message to put on the bots status.',
            type: ApplicationCommandOptionType.String,
            required: false,
          },
          {
            name: 'embedmessage',
            description: 'The message to put in the embed.',
            type: ApplicationCommandOptionType.String,
            required: false,
          },
    ],
    //deleted: true,
  
    callback: (client, interaction) => {
      try{
        const status = interaction.options.get('status').value;
        const pingAll = interaction.options.get('pingall')?.value || false;
        const statusMessage = interaction.options.get('statusmessage')?.value || false;
        const embedMessage = interaction.options.get('embedmessage')?.value || false;
        const statusEmbed = new EmbedBuilder()

        if(status === 'operational'){ //If it's operational, apply it to the statusEmbed.
          statusEmbed.setTitle(`Servers are **ONLINE** ✅`)
          statusEmbed.setDescription(`Servers are currently operational and working as intended. However, if you're having issues, please feel free to reach out to a member of staff for support!`)
          statusEmbed.setImage(`https://i.imgur.com/ijqvweR.png`)
          statusEmbed.setTimestamp()
          statusEmbed.setColor("Green")
          if(statusMessage){
            client.user.setPresence({ activities: [{ name: `${statusMessage}`, type:ActivityType.Custom }], status: 'online' });
          } else {
            client.user.setPresence({ activities: [{ name: ``, type:ActivityType.Custom }], status: 'online' });
          }
        } else if(status === 'down'){ //If it's down, apply it to the statusEmbed.
          statusEmbed.setTitle(`Servers are **OFFLINE** ❌`)
          statusEmbed.setDescription(`We're currently experiencing issues with our servers. Please don't contact staff as we're aware of the current issues and are working on a fix to get them back up as soon as possible!`)
          statusEmbed.setImage(`https://i.imgur.com/1JbkIja.png`)
          statusEmbed.setTimestamp()
          statusEmbed.setColor("Red")
          if(statusMessage){
            client.user.setPresence({ activities: [{ name: `${statusMessage}`, type:ActivityType.Custom }], status: 'dnd' });
          } else {
            client.user.setPresence({ activities: [{ name: ``, type:ActivityType.Custom }], status: 'dnd' });
          }
        } else if(status === 'maintenance'){ //If it's under maintenance, apply it to the statusEmbed.
          statusEmbed.setTitle(`Servers are **UNDER MAINTENANCE** 🔨`)
          statusEmbed.setDescription(`We're currently working on the servers and are aware that there could be some issues whilst doing so. Remain patient! This is planned, and the servers will be up shortly.`)
          statusEmbed.setImage(`https://i.imgur.com/ieLHzTD.png`)
          statusEmbed.setTimestamp()
          statusEmbed.setColor("Orange")
          if(statusMessage){
            client.user.setPresence({ activities: [{ name: `${statusMessage}`, type:ActivityType.Custom }], status: 'idle' });
          } else {
            client.user.setPresence({ activities: [{ name: ``, type:ActivityType.Custom }], status: 'idle' });
          }
        }
        if(embedMessage){
          statusEmbed.addFields(
            {name:`Message From The Devs 💌`, value:`${embedMessage}`}
          )
        }
        if(pingAll){ //If ping all == true, ping all in content then print embed
          interaction.channel.send({content: `||[ @everyone ]||`, embeds:[statusEmbed]});
        } else { //Or don't do that
          interaction.channel.send({embeds: [statusEmbed]})
        }
      
        interaction.reply({content: `Your server status update has been posted to the channel. ✅`, ephemeral: true}) //Reply to the user to tell them it's been printed, if this isn't done a red error response will be given to the user. (Not user friendly)
      } catch(err){
        console.log(err)
        interaction.reply({content: `*An error was caught running this command!* ❌\n\n> Try lowering the characters used in the statusMessage option, if this doesn't work, please contact the developer of SelectStudio's bot.`, ephemeral: true})
      }
  }
}