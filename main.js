const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+';

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./comandos/${file}`);

  client.commands.set(command.name, command);
}

const d = new Date();
client.once('ready', () => {
  console.log('Discord pronto as '+d.getHours()+' horas e '+d.getMinutes()+' minutos');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
    
  if(command === 'ping'){
    client.commands.get('ping').execute(message, args);
  }
});

client.login('TOKEN');