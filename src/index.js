//Defining shiz

require('dotenv').config();

const { Client, IntentsBitField, Application, ApplicationCommandOptionType, Collection} = require('discord.js');

//Command cooldowns defenitions
const talkedRecentlyAbout = new Set();
const talkedRecentlyWeather = new Set();
const talkedRecentlyInTheEnd = new Set();

module.exports = {Client, IntentsBitField, Application, ApplicationCommandOptionType, talkedRecentlyAbout, talkedRecentlyWeather, talkedRecentlyInTheEnd};
const eventHandler = require('./handlers/eventHandler');

const client = new Client({ //Defines the new client along with Intents.
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

eventHandler(client);

client.login(process.env.TOKEN); //Login via client. ((Token stored externally for security.))