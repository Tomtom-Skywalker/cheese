const Discord = require("discord.js");
//
module.exports = {
  name: "botinvite",
  enabled: true,
  clientPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","GUILD_MESSAGES"],

run:async (client, message, args)=> {
  await message.reply({content:`I Am Gathering The Command Information For You, Please Wait <@${message.author.id}>`}).then((sent) => { setTimeout(function(){ sent.delete().catch((e) => console.log(e)); }, 1500) });
  message.channel.sendTyping()
  setTimeout(function(){ 
    let em = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setDescription(`[**\`INVITE CHEESE\`**](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)`)  
    message.channel.send({embeds : [em] })  
   }, 2000) 

}}

