module.exports = {
  name: 'in-the-end',
  description: `ONE THING, I DON'T KNOW WHY, IT DOESN'T EVEN MATTER HOW HARD YOU TRY!`,
  // devOnly: Boolean,
  // testOnly: true,
  // options: Object[],
  // deleted: true,
  
  callback: (client, interaction) => {
    const channel = interaction.channel;
    const inTheEndGif = [[`https://tenor.com/bWiID.gif`,1500],
    [`https://tenor.com/bWiIE.gif`,1800],
    [`https://tenor.com/bWiIG.gif`,2800],
    [`https://tenor.com/bWiIH.gif`,3300],
    [`https://tenor.com/bWiII.gif`,2000],
    [`https://tenor.com/bWiIJ.gif`,3500],
    [`https://tenor.com/bWiIK.gif`,1300],
    [`https://tenor.com/bWiIM.gif`,4300],
    [`https://tenor.com/bWiIN.gif`,7400],
    [`https://tenor.com/bWiIX.gif`,5100],
    [`https://tenor.com/bWiIY.gif`,5200],
    [`https://tenor.com/bWiIZ.gif`,5300],
    [`https://tenor.com/bWiI0.gif`,2200],
    [`https://tenor.com/bWiI1.gif`,1800],
    [`https://tenor.com/bWiI2.gif`,3200],
    [`https://tenor.com/bWiI4.gif`,5800],];

    function sleep(ms) { //Sleep function for when needed.
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const {talkedRecentlyInTheEnd} = require('../../index.js')

    if (talkedRecentlyInTheEnd.has(interaction.user.id)) {
      interaction.reply({ content: "You're on cooldown! Wait a li'l bit..!  ⏰ [30 Minute Cooldown] ", ephemeral: true});
    } else {
    interaction.reply("Now playing -- In the end.")
    intheend(channel, sleep, inTheEndGif);
  
    talkedRecentlyInTheEnd.add(interaction.user.id);
    setTimeout(() => {
      talkedRecentlyInTheEnd.delete(interaction.user.id);// Removes the user from the set after a minute
    }, 1800000);
    }

    async function intheend(channel, sleep, inTheEndGif) {
      await sleep(100)
      for (let i = 0; i != (Object.keys(inTheEndGif).length); i++) {
        channel.send(inTheEndGif[i][0]);
        await sleep(inTheEndGif[i][1]);
      }
    }
}};