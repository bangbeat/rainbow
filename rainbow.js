const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('277974660904386563').roles.find('name', '.squad.').edit({color: 'RANDOM'}) 
    },1000);
}).login(process.env.BOT_TOKEN);


