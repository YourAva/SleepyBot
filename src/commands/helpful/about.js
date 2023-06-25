module.exports = {
    name: 'about',
    description: 'Learn a little about sleepybot',
    // devOnly: Boolean,
    // testOnly: true,
    // options: Object[],
    // deleted: true,
  
    callback: (client, interaction) => {
      const {talkedRecentlyAbout} = require('../../index.js')
      const { EmbedBuilder, Embed } = require('discord.js');

      const abtEmbed = new EmbedBuilder()
        .setColor([138, 26, 45])
        .setTitle("About SleepyBot")
        .setDescription("A little info about me!")
        .setAuthor({ name: 'SleepyBot', iconURL: 'https://i.pinimg.com/originals/be/b4/94/beb4949b6b3ef3402acdabc402f8fd10.jpg'})
        .setThumbnail('https://i.pinimg.com/originals/be/b4/94/beb4949b6b3ef3402acdabc402f8fd10.jpg')
        .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: 'Developers', value: '•Ava\n•The power of Steezus Christ    \n•I forgor 💀', inline: true },
          { name: 'Why?', value: 'Well, you have to understand that at certain points in time, I can get, maybe, possibly, a little bit silly.', inline: true},
        ).setFooter({ text: `Check your mail <3 (There's a pipe bomb! ^v^)`, iconURL: `https://i.pinimg.com/originals/be/b4/94/beb4949b6b3ef3402acdabc402f8fd10.jpg`})

      //Call embed

      if (talkedRecentlyAbout.has(interaction.user.id)) {
        interaction.reply({ content: "You're on cooldown! Wait a li'l bit..!  ⏰ ", ephemeral: true});
      } else {
      interaction.reply({ embeds: [abtEmbed]})
  
      talkedRecentlyAbout.add(interaction.user.id);
      setTimeout(() => {
        talkedRecentlyAbout.delete(interaction.user.id);// Removes the user from the set after a minute
      }, 60000);
      }
    }
};
