//Defining stuff

require('dotenv').config();

const { Client, IntentsBitField, Application, ApplicationCommandOptionType} = require('discord.js');

//Command cooldowns defenitions
//const talkedRecentlyAbout = new Set(); -- When defining a cooldown const, make sure to export it on the line below.

module.exports = {Client, IntentsBitField, Application, ApplicationCommandOptionType,};
const eventHandler = require('./handlers/eventHandler');

const client = new Client({ //Defines the new client along with Intents.
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

eventHandler(client); // Call the eventHandler function (Basically just run eventHandler.js )

client.login(process.env.TOKEN); //Login via client. ((Token stored externally for security.))