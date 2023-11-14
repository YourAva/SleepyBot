const {ApplicationCommandOptionType } = require("../../index");

module.exports = {
    name: 'sum',
    description: `For those too lazy to load up their calculator app.`,
    // devOnly: Boolean,
    // testOnly: true,
    options: [
        {
            name: "number-1",
            description: `Number-1`,
            type: ApplicationCommandOptionType.Number,
            required: "true"
        },
        {
            name: "option",
            description: 'Choose to times, add, minus or divide.',
            required: "true",
            type: ApplicationCommandOptionType.String,
            choices: [
                {
                    name: '+',
                    value: '+'
                },
                {
                    name: '-',
                    value: '-'
                },
                {
                    name: '*',
                    value: '*'
                },
                {
                    name: '/',
                    value: '/'
                },
            ],
        },
        {
            name: "number-2",
            description: `Number-2`,
            type: ApplicationCommandOptionType.Number,
            required: "true"
        }
    ],
    // deleted: true,
  
    callback: (client, interaction) => {
        const num1 = interaction.options.get('number-1').value;
        const choice = interaction.options.get('option').value;
        const num2 = interaction.options.get('number-2').value;
        
        if (choice === "+") {
            interaction.reply(`Answer: ${num1 + num2}`);
            return;
        };
        if (choice === "-") {
            interaction.reply(`Answer: ${num1 - num2}`);
            return;
        };
        if (choice === "*") {
            interaction.reply(`Answer: ${num1 * num2}`);
            return;
        };
        if (choice === "/") {
            interaction.reply(`Answer: ${num1 / num2}`);
            return;
        };
        interaction.reply({ content: "You didn't enter a valid option to the sum. You can use *, /, + or -", ephemeral: true });
        
    },
  };