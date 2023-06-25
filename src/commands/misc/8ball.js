const {ApplicationCommandOptionType } = require("../../index");

module.exports = {
    name: '8ball',
    description: 'Consult the magic 8 ball',
    // devOnly: Boolean,
    // testOnly: true,
    options: [
      {
        name: "question",
        description: "What will you ask the 8 ball..?",
        type: ApplicationCommandOptionType.String,
        required: true
      },
    ],
    // deleted: true,
    callback: (client, interaction) => {
        const rand = Math.floor(Math.random() * 7);
        const user = (interaction.member.user.id);
        const question = interaction.options.get("question").value;
        const responses = ["**It is certain**","**It is decidedly so**", "**Without a doubt**","**Yes definitely**","**Ask again later**","**Cannot predict now**","**Don't count on it**","**My sources say no**"];

        interaction.reply(`<@${user}> asked [*"${question}"*]\n\n...🎱${responses[rand]}🎱...`);
    },
  };