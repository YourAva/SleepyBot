module.exports = {
  name: 'angry',
  description: 'express your sheer dissapointment.',
  // devOnly: Boolean,
  // testOnly: true,
  // options: Object[],
  // deleted: true,
  callback: (client, interaction) => {
    const angryGif = [`https://tenor.com/bPECv.gif`,`https://tenor.com/bsMns.gif`,`https://tenor.com/bV2cs.gif`,`https://tenor.com/bOyM7.gif`,`https://tenor.com/bMUh7.gif`,`https://tenor.com/bPMSC.gif`,`https://tenor.com/botKM.gif`];

    interaction.reply(`**[ <@${interaction.member.user.id}> ] is feeling a little angry >:(**\n\n${gif}`);
  },
};