
const Discord = require("discord.js");
const prettyMilliseconds = require("pretty-ms");
//
module.exports = {
  name: "uptime",
  enabled: true,
  clientPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","GUILD_MESSAGES"],

run:async (client, message, args, params)=> {
  await message.reply({content:`I Am Gathering The Command Information For You, Please Wait <@${message.author.id}>`}).then((sent) => { setTimeout(function(){ sent.delete().catch((e) => console.log(e)); }, 1500) });
  message.channel.sendTyping()
  setTimeout(function(){ 
    let embed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle(`Uptime: ${prettyMilliseconds(client.uptime)}`)
message.reply({embeds: [embed]})
   }, 2000) 

}}

