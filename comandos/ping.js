module.exports = {
    name: 'ping',
    description: "comando de ping!",
    execute(message, args){
        message.channel.send('pong');
    }
}