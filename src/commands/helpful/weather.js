const {ApplicationCommandOptionType } = require("../../index");

module.exports = {
    name: 'weather',
    description: 'Find the weather of a location.',
    // devOnly: Boolean,
    // testOnly: true,
    options: [
      {
        name: 'location',
        description: 'The location you wish to find the weather of',
        type: ApplicationCommandOptionType.String,
        required: true,
      }
    ],
    // deleted: true,
  
    callback: async (client, interaction) => {
      const {talkedRecentlyWeather} = require('../../index.js')
      const { EmbedBuilder, Embed } = require('discord.js');
      const location = interaction.options.get('location').value;

      const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_ACCESS_KEY}&query=${location}`;
      
      if (talkedRecentlyWeather.has(interaction.user.id)) {
        interaction.reply({ content: "Due to API limitations, this command can only be used once a day. ⏰ ", ephemeral: true});
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
  
          if (data.error) {
            interaction.reply({content: `Looks like there was an error.\n${data.error.info}`, ephemeral: true})
            return;
          }
  
          const weatherEmbed = new EmbedBuilder()
          .setColor([255, 234, 8])
          .setTitle(` ☁ Current weather conditions for ${data.location.name}:`)
          .setDescription(data.current.weather_descriptions[0])
          .setFooter({text:`${data.location.localtime}`, iconURL: 'https://i.pinimg.com/originals/be/b4/94/beb4949b6b3ef3402acdabc402f8fd10.jpg'})
          .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'Temperature ⛅', value: `${data.current.temperature}°C`,inline:true},
            { name: 'Feels like 🤞', value: `${data.current.feelslike}°C`,inline:true},
            { name: 'Humidity 🚿', value: `${data.current.humidity}%`,inline:true},
          )
          .setImage('https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/sky/haze-and-cloud-in-the-sky-over-the-ocean.jpg/haze-and-cloud-in-the-sky-over-the-ocean.jpg/metofficegovuk%3AheroMedium')
          interaction.reply({ embeds: [weatherEmbed]})
        } catch (error) {
          console.error(error);
          interaction.reply({content: 'An error occurred while fetching the weather information.', ephemeral: true})
        }
  
      talkedRecentlyWeather.add(interaction.user.id);
      setTimeout(() => {
        talkedRecentlyWeather.delete(interaction.user.id);// Removes the user from the set after a minute
      }, 86400000);
      }

      
    },
  };