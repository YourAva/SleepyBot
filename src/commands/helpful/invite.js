module.exports = {
    name: 'invite',
    description: 'Grab the invite link for SleepyBot!',
    // devOnly: Boolean,
    // testOnly: true,
    // options: Object[],
    // deleted: true,
    callback: (client, interaction) => {
        const { EmbedBuilder, Embed } = require('discord.js');
        const invLink = new EmbedBuilder()
        .setColor([138, 26, 45])
        .setTitle("Click me!")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=1083481300612169799&permissions=8&scope=bot%20applications.commands")
        .setDescription("Invite me to your server!")
        .setAuthor({ name: 'SleepyBot', iconURL: 'https://i.pinimg.com/originals/be/b4/94/beb4949b6b3ef3402acdabc402f8fd10.jpg'})
        .setThumbnail('https://i.pinimg.com/originals/be/b4/94/beb4949b6b3ef3402acdabc402f8fd10.jpg')
        interaction.reply({ content: "*I've sent a private DM to you containing the invite link.\nThanks for your interest in me! <3*", ephemeral: true })

        const user = client.users.cache.get(interaction.member.user.id);
        user.send({ content: "Heya! Here's the link to add me to your server. <3\n\nKeep in mind SleepyBot is **IN DEVELOPMENT**.\nNew permissions may be needed for it's brand new features,\nTo keep up to date, join the discord.\n[ https://discord.gg/XXRmVY58gE ]", embeds: [invLink]})
    }
};