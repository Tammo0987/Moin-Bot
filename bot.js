const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Moin Bot ist online!');
});

client.on('message', message => {
    if (message.content === '!developer') {
        const devRole = message.guild.roles.cache.get("716365782753214524");

        if (message.member.roles.cache.has(devRole.id)) {
            message.member.roles.remove(devRole);
        } else {
            message.member.roles.add(devRole);
        }
    }
});

client.login('process.env.TOKEN');