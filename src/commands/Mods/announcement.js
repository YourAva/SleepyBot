const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'announcement',
  description: 'Give an announcement to the server.',
  options: [
    {
      name: 'title',
      description: 'title for the embed',
      type: ApplicationCommandOptionType.String,
      required: true
    },
    {
      name: 'description',
      description: 'description for the embed',
      type: ApplicationCommandOptionType.String,
      required: true
    },
    {
      name: 'color',
      description: 'color for the embed [HEX]',
      type: ApplicationCommandOptionType.String,
      required: false,
      choices: [
        { name: 'Default', value: 'Default' },
        { name: 'White', value: 'White' },
        { name: 'Aqua', value: 'Aqua' },
        { name: 'Green', value: 'Green' },
        { name: 'Blue', value: 'Blue' },
        { name: 'Yellow', value: 'Yellow' },
        { name: 'Purple', value: 'Purple' },
        { name: 'LuminousVividPink', value: 'LuminousVividPink' },
        { name: 'Fuchsia', value: 'Fuchsia' },
        { name: 'Gold', value: 'Gold' },
        { name: 'Orange', value: 'Orange' },
        { name: 'Red', value: 'Red' },
        { name: 'Grey', value: 'Grey' },
        { name: 'Navy', value: 'Navy' },
        { name: 'DarkAqua', value: 'DarkAqua' },
        { name: 'DarkGreen', value: 'DarkGreen' },
        { name: 'DarkBlue', value: 'DarkBlue' },
        { name: 'DarkPurple', value: 'DarkPurple' },
        { name: 'DarkVividPink', value: 'DarkVividPink' },
        { name: 'DarkGold', value: 'DarkGold' },
        { name: 'DarkOrange', value: 'DarkOrange' },
        { name: 'DarkRed', value: 'DarkRed' },
        { name: 'Blurple', value: 'Blurple' },
        { name: 'Greyple', value: 'Greyple' },
      ],
    },
    {
      name: 'allping',
      description: 'ping everyone with the announcement. [IMPORTANT PAY ATTENTION!!]',
      type: ApplicationCommandOptionType.Boolean,
      required: false
    },
    {
      name: 'image',
      description: 'https://i.imgur.com/[link].png',
      type: ApplicationCommandOptionType.String,
      required: false
    },
    {
      name: 'field1',
      description: 'The field description for field1.',
      type: ApplicationCommandOptionType.String,
      required: false
    },
    {
      name: 'fieldtitle1',
      description: 'The field title for field1.',
      type: ApplicationCommandOptionType.String,
      required: false
    },
    {
      name: 'field2',
      description: 'The field description for field2.',
      type: ApplicationCommandOptionType.String,
      required: false
    },
    {
      name: 'fieldtitle2',
      description: 'The field title for field2.',
      type: ApplicationCommandOptionType.String,
      required: false
    },
    {
      name: 'field3',
      description: 'The field description for field3.',
      type: ApplicationCommandOptionType.String,
      required: false
    },
    {
      name: 'fieldtitle3',
      description: 'The field title for field3.',
      type: ApplicationCommandOptionType.String,
      required: false
    },
    {
      name: 'field4',
      description: 'The field description for field4.',
      type: ApplicationCommandOptionType.String,
      required: false
    },
    {
      name: 'fieldtitle4',
      description: 'The field title for field4.',
      type: ApplicationCommandOptionType.String,
      required: false
    },
  ],
  //deleted: true,

  callback: (client, interaction) => {
    try{
      const color = interaction.options.get('color')?.value || 'Orange';
      const title = interaction.options.get('title')?.value;
      const description = interaction.options.get('description').value;
      const image = interaction.options.get('image')?.value || null;
      const allping = interaction.options.get('allping')?.value || null; //Get back all of the user inputs.

      const field1 = interaction.options.get('field1')?.value || null;
      const fieldTitle1 = interaction.options.get('fieldtitle1')?.value || null;
      const field2 = interaction.options.get('field2')?.value || null;
      const fieldTitle2 = interaction.options.get('fieldtitle2')?.value || null;
      const field3 = interaction.options.get('field3')?.value || null;
      const fieldTitle3 = interaction.options.get('fieldtitle3')?.value || null;
      const field4 = interaction.options.get('field4')?.value || null;
      const fieldTitle4 = interaction.options.get('fieldtitle4')?.value || null;

      if(title.length > 256) { //Check the length of certain variables to make sure bot doesn't hit an error.
        interaction.reply({content:`❌ *Your title is too long! Please fix it and try again.*`,ephemeral:true})
      }
      if(description.length > 4096) {
        interaction.reply({content:`❌ *Your description is too long! Please fix it and try again. {Char limit: 4095}*`,ephemeral:true})
      }

      const abtEmbed = new EmbedBuilder() //Build the needed stuff for an embed
      .setTitle(`${title}`)
      .setDescription(`${description}`)
      .setFooter({text: `Posted by: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL()})
      .setTimestamp()

      if (image) { //Add on the stuff it's required if the user inputted anything.
        abtEmbed.setImage(image);
      }
      if (color) {
        abtEmbed.setColor(`${color}`);
      }
      if (field1 && fieldTitle1) {
        abtEmbed.addFields(
          { name: `${fieldTitle1}`, value: `${field1}` },
        )
      }
      if (field2 && fieldTitle2) {
        abtEmbed.addFields(
          { name: `${fieldTitle2}`, value: `${field2}` },
        )
      }
      if (field3 && fieldTitle3) {
        abtEmbed.addFields(
          { name: `${fieldTitle3}`, value: `${field3}` },
        )
      }
      if (field4 && fieldTitle4) {
        abtEmbed.addFields(
          { name: `${fieldTitle4}`, value: `${field4}` },
        )
      }

      // Call embed, give an @everyone if needed.
      if (allping === true) {
        interaction.channel.send({content:`||[ @everyone ]||`,embeds: [abtEmbed]});
      } else {
        interaction.channel.send({embeds: [abtEmbed]});
      }
      interaction.reply({content: `✅ Message posted below VVV`, ephemeral: true}) //Tell the user it's been posted, if not it'll send back a red error message via discord which isn't user friendly.
    } catch(err) { //If an error is caught we'll tell the user instead of giving a red error. Most likely, an error will be too many characters
      interaction.reply({content: `**:x: Undefined error caught!**\n\n> You may have accidentally put in too many characters, please try shortening the message and try again\n*If this error persists, contact @ihavebadligma*`})
    }
  }
};