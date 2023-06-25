module.exports = {
    name: 'joke',
    description: 'Tell an amazing joke.',
    // devOnly: Boolean,
    // testOnly: true,
    // options: Object[],
    // deleted: true,
  
    callback: (client, interaction) => {
        const jokes = [
            "Why did the tomato turn red? Because it saw the salad dressing!",
            "What did the janitor say when he jumped out of the closet? 'Supplies!'",
            "Why do we tell actors to 'break a leg?' Because every play has a cast!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why did the bicycle fall over? Because it was two-tired!"
          ];
        
        interaction.reply(jokes[Math.floor(Math.random() * jokes.length)]);
    },
  };