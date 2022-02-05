const Discord = require("discord.js");
//
module.exports = {
  name: "commands",
  enabled: true,
  clientPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","GUILD_MESSAGES"],

run:async (client, message, args)=> {
  await message.reply({content:`I Am Gathering The Command Information For You, Please Wait <@${message.author.id}>`}).then((sent) => { setTimeout(function(){ sent.delete().catch((e) => console.log(e)); }, 1500) });
  message.channel.sendTyping()
  setTimeout(function(){ 
    let guild = message.guild
    let embed = new Discord.MessageEmbed()
    .setTitle("Help & Commands")
    .setColor("#2F3136")
    .setDescription("Current Commands For This Bot:")
    .addField("ping", "Shows My Latency")
    .addField("cheesei", "Sends Cheese Information")
    .addField("cheesep", "Sends Cheese Pictures")
    .addField("sinvite", "Sends A Server Invite {Perm invite}")
    .addField("botinvite", "Sends A Bot Invite Link")
    .addField("uptime", "Sends The Duration The Bots Been Online For")
    .addField("support", "Sends The Support Server Invite")
    .addField("servercount", "Sends A Approx Number For The Total Servers The Bot Is In!")
    .setFooter({text:`Command Requested By ${message.author.username}`})
  
  
        message.reply({embeds: [embed]}).catch((e) => guild.channels.cache.find(i => i.name === 'logs').send({content:'Error: ' + e})).catch((e) =>console.log(e)); 
   }, 2000) 

}}

