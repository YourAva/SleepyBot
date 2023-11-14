const {ApplicationCommandOptionType } = require("../../index");
module.exports = {
    name: 'img',
    description: 'Find a random placeholder image.',
    // devOnly: Boolean,
    // testOnly: true,
    options: [
        {
            name: 'width',
            description: 'Get the width of the image',
            type: ApplicationCommandOptionType.Number,
            required: true
        },
        {
            name: 'height',
            description: 'Get the height of the image',
            type: ApplicationCommandOptionType.Number,
            required: true
        }
    ],
    // deleted: true,
  
    callback: async (client, interaction) => {
    const { EmbedBuilder, Embed } = require('discord.js')
      const width = (interaction.options.get('width').value);
      const height = (interaction.options.get('height').value);

      const response = await fetch(`https://picsum.photos/${width}/${height}`);
      const imageUrl = response.url;
      if (imageUrl[8] === "p") {
        interaction.reply({content: `Image couldn't be found. Remember to set normal paramaters. 💔`, ephemeral: true})
        return;
      }
      const imgEmbed = new EmbedBuilder()
        .setColor([138, 26, 45])
        .setImage(imageUrl)
      interaction.reply({embeds: [imgEmbed]});
    },
  };