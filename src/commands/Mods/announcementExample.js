const {EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'announcement-help',
    description: 'Give an example for what the different options in /announcement do.',
    //options: [],
    //deleted: true,
  
    callback: (client, interaction) => {
      const annHelpEmbed = new EmbedBuilder() //Build the needed stuff for an embed
        .setTitle(`{TITLE}`)
        .setDescription(`{DESCRIPTION}`)
        .setFooter({text: `Posted by: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL()})
        .addFields(
            {name:`{fieldtitle1}`, value:`{field1 -- Description under field1 title}`},
            {name:`{fieldtitle2}`, value:`{field2 -- Description under field2 title}`},
            {name:`{fieldtitle3}`, value:`{field3 -- Description under field3 title}`},
            {name:`{fieldtitle4}`, value:`{field4 -- Description under field4 title}`},
        )
        .setImage(`https://i.imgur.com/4nMAB67.png`)
        .setTimestamp()
        .setColor("Orange")

        const user = client.users.cache.get(interaction.member.user.id);
        user.send({content:`\n**Heya! <@${interaction.member.user.id}>** 💝\n\nIt looks like you need some help with the **/announcement command**, well no worries! I'm here to help.\n\nBelow you'll find the embed with all possible options corresponding to their part of the embed. Use them accordingly. Please note that to have 2 field available, a field title and field both cannot be equal to null, and need an option. Otherwise the field's will not show up\n\nIn addition to this, you also have a few more options...\n\n⏰**allping** -- Choose to @everyone in the message\n🌈**color** -- Choose the color for the embed to be.`, embeds: [annHelpEmbed]});
        interaction.reply({content:`❗ **You've been sent a private DM with all information you need for the /announcement command** ❗`, ephemeral: true})
  }
}