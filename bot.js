const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('King');
    console.log('Moin Bot ist online!');
});

client.on('message', message => {
    if (message.channel.name !== 'bot-spam') {
        return;
    }

    if (message.content === '!info') {
        const info = new Discord.MessageEmbed()
            .setColor('1F9EFF')
            .setTitle('Info')
            .setAuthor('Moin-Bot')
            .setDescription('Um Zugriff auf die Dev Section zu bekommen, kannst den Command !developer nutzen. Um die Rolle wieder zu entfernen, kannst du den selben Command nutzen.')
            .setThumbnail('https://i.imgur.com/uAMFu0M.png');

        message.channel.send(info);
    }

    if (message.content === '!developer') {
        const devRole = message.guild.roles.cache.get("716365782753214524");

        if (message.member.roles.cache.has(devRole.id)) {
            message.member.roles.remove(devRole);
        } else {
            message.member.roles.add(devRole);
        }
    }
});

client.login(process.env.TOKEN);