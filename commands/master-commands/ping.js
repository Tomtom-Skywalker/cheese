const Discord = require("discord.js");
//
module.exports = {
  name: "ping",
  enabled: true,
  clientPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","GUILD_MESSAGES"],

run:async (client, message, args)=> {
  await message.reply({content:`I Am Gathering The Command Information For You, Please Wait <@${message.author.id}>`}).then((sent) => { setTimeout(function(){ sent.delete().catch((e) => console.log(e)); }, 1500) });
  message.channel.sendTyping()
  setTimeout(function(){ 
    message.channel.send('Pinging...').then(sent => {sent.delete();
      let ping = [`Im Alive ${sent.createdTimestamp - message.createdTimestamp}ms`,`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms \nAPI Latency is ${Math.round(client.ws.ping)}ms`, `My Ping ${sent.createdTimestamp - message.createdTimestamp}ms \nAPI ${Math.round(client.ws.ping)}ms`]
      let e = new Discord.MessageEmbed().setDescription(ping[Math.floor(Math.random() * ping.length)]).setColor("#2F3136")
      message.channel.send({embeds:[e]})
    })  
   }, 2000) 

}}

