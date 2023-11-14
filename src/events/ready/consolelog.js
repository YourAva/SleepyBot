module.exports = (client) => {
    console.log(`${client.user.tag}, locked n' loaded baby!\n\nServer(s): ${client.guilds.cache.size}`);
    client.user.setPresence({ activities: [{ name: '/help <3' }], status: 'idle' });
};