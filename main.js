const Discord = require('discord.js');
const client = new Discord.Client();
const c = '!';

const d = new Date();

client.on('ready', () => {
  console.log('Discord pronto as '+d.getHours()+' horas e '+d.getMinutes()+' minutos');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === c+'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

client.login('ODIwMTMwMzc3MTIwMjE5MTQ3.YEwr7w.PSFxpVXMZ-t58roLi7m1sr10VzA');