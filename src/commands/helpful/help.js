module.exports = {
    name: 'help',
    description: 'If you have any issues or inquiries about Sleepybot, this is the command for you!',
    // devOnly: Boolean,
    // testOnly: true,
    // options: Object[],
    // deleted: true,
    callback: (client, interaction) => {
        const { EmbedBuilder, Embed } = require('discord.js');

        const invLink = new EmbedBuilder()
        .setColor([138, 26, 45])
        .setTitle("Join the official SleepyBot server")
        .setURL("https://discord.gg/XXRmVY58gE")
        .setDescription("If you're looking to get some help with SleepyBot\nPlease join the discord server.\nI offer as much support as I can here.\n\n*Keep in mind, I am but one person. So help will be limited.*")
        
        const helpEmbed = new EmbedBuilder()
        .setColor([138, 26, 45])
        .setTitle("Help")
        .setAuthor({ name: 'SleepyBot', iconURL: 'https://i.pinimg.com/originals/be/b4/94/beb4949b6b3ef3402acdabc402f8fd10.jpg'})
        .setThumbnail('https://i.pinimg.com/originals/be/b4/94/beb4949b6b3ef3402acdabc402f8fd10.jpg')
        .addFields(
            { name: '🦾Helpful', value: '•/about\n•/help\n•/invite\n•/membercount\n•/sum\n•/ping\n•/weather\n•binary-convert',inline: true},
            { name: '🍔Miscellaneous', value: '•/8ball\n•/console\n•/in-the-end\n•/roll\n•/serveramount', inline: true},
            { name: '\u200B', value: '\u200B' },
            { name: '🤔Reactions', value: '•/angry\n•/kill\n•/smash', inline: true},
            { name: '🎊Fun', value: '•/joke\n•/img\n•/confession', inline: true},
        )
        interaction.reply({ embeds: [helpEmbed]})
    }
};