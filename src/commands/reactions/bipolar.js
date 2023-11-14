const { ApplicationCommandOptionType, ReactionUserManager } = require("discord.js");

module.exports = {
    name: 'bipolar',
    description: 'Pick a random emotion..!',
    // devOnly: Boolean,
    // testOnly: true,
    // deleted: true,
    callback: (client, interaction) => {
        function pickGif(gifList){
            return gifList[Math.floor(Math.random() * gifList.length)]
        }

        const excitedGifs = [
            "https://media.giphy.com/media/l0amJzVHIAfl7jMDos/giphy.gif",
            "https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif",
            "https://media.giphy.com/media/S9i8jJxTvAKVHVMvvW/giphy.gif",
            "https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif",
            "https://media.giphy.com/media/UO5elnTqo4vSg/giphy.gif",
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
            "https://media.giphy.com/media/hZj44bR9FVI3K/giphy.gif",
            "https://media.giphy.com/media/CAxbo8KC2A0y4/giphy.gif",
            "https://media.giphy.com/media/3ndAvMC5LFPNMCzq7m/giphy.gif"
        ];
        const angryGifs = [
            "https://tenor.com/bPECv.gif",
            "https://tenor.com/bsMns.gif",
            "https://tenor.com/bV2cs.gif",
            "https://tenor.com/bOyM7.gif",
            "https://tenor.com/bMUh7.gif",
            "https://tenor.com/bPMSC.gif",
            "https://tenor.com/botKM.gif"
        ];
        const scaredGifs = [
            "https://media.giphy.com/media/bEVKYB487Lqxy/giphy.gif",
            "https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif",
            "https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif",
            "https://media.giphy.com/media/PGg4D8lGwRz0s/giphy.gif",
            "https://media.giphy.com/media/AFTWK5Qo22V2g/giphy.gif",
            "https://media.giphy.com/media/ENt72LgUE2gV2/giphy.gif",
            "https://media.giphy.com/media/7ut5pB8HmWyZ2/giphy.gif",
            "https://media.giphy.com/media/3o6gEfa23iqP9HfOdW/giphy.gif"
        ];
        const sillyGifs = [
            "https://media.giphy.com/media/26xBJYPpNjdTYElOM/giphy.gif",
            "https://media.giphy.com/media/epnHmbfUFaBkk/giphy.gif",
            "https://media.giphy.com/media/5Vy3WpDbXXMze/giphy.gif",
            "https://media.giphy.com/media/VjlhgT6zZGrqE/giphy.gif",
            "https://media.giphy.com/media/6bAZXey5wNzBC/giphy.gif",
            "https://media.giphy.com/media/j85AoJKs7rhmLlTGz7/giphy.gif"
        ];
        const emotions = [
            "excited",
            "angry",
            "scared",
            "silly"
        ]

        const emotion = emotions[Math.floor(Math.random() * emotions.length)]
        if(emotion === "excited"){
            const gif = pickGif(excitedGifs)
            interaction.reply(`**[ <@${interaction.member.user.id}> ] IS EXCITEEEEEED!!!!**\n\n${gif}`);
        } else if(emotion === "angry"){
            const gif = pickGif(angryGifs)
            interaction.reply(`**[ <@${interaction.member.user.id}> ] is feeling a little angry >:(**\n\n${gif}`);
        } else if(emotion === "scared"){
            const gif = pickGif(scaredGifs)
            interaction.reply(`**[ <@${interaction.member.user.id}> ] Is bricking it!**\n\n${gif}`);
        } else if(emotion === "silly"){
            const gif = pickGif(sillyGifs)
            interaction.reply(`**[ <@${interaction.member.user.id}> ] Is feeling a little silly..!**\n\n${gif}`);
        } else{
            interaction.reply({ephemeral: true, content: 'Oops... Look like I ran into an error trying to get your empotion. I apologise for that!\n*Maybe try again?*'})
        }
    
        },
  };