const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: 'roll',
    description: 'Roll a die!',
    // devOnly: Boolean,
    // testOnly: true,
    options: [
        {
            name: "bottom",
            description: "The lowest amount the dice can roll",
            type: ApplicationCommandOptionType.Number,
            required: "true"
        },
        {
            name: "top",
            description: "The highest amount the dice can roll",
            type: ApplicationCommandOptionType.Number,
            required: "true"
        }
    ],
    // deleted: true,
  
    callback: (client, interaction) => {
        
        const bottom = interaction.options.get("bottom").value;
        const top = interaction.options.get("top").value;
        const ans = Math.floor(Math.random() * (top - bottom) + bottom);

        interaction.reply(`You rolled -- **[ ${ans} ] 🎲**`)
    },
  };