const { devs, testServer } = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const localCommands = getLocalCommands();

  try {
    const commandObject = localCommands.find(
      (cmd) => cmd.name === interaction.commandName
    );

    if (!commandObject) return;

    if (commandObject.devOnly) {
      if(!devs.includes(interaction.member.id)) {
        interaction.reply({
          content: '***This is a dev only command, sorry!***',
          ephemeral: true,
        });
        return;
      }

      if (commandObject.testOnly) {
        if(!devs.includes(interaction.member.id)) {
          interaction.reply({
            content: '***This command cannot be ran here, sorry!***',
            ephemeral: true,
          });
          return;
        }
      }
    }

    await commandObject.callback(client, interaction);
  } catch (error) {
    console.log(`Looks like we got an error running this command, let's try fix it! <3\n\n${error}`)
  }
};