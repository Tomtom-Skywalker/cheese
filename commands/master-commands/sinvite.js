
const Discord = require("discord.js");
//
module.exports = {
  name: "sinvite",
  enabled: true,
  clientPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","GUILD_MESSAGES"],

run:async (client, message, args)=> {
  await message.reply({content:`I Am Gathering The Command Information For You, Please Wait <@${message.author.id}>`}).then((sent) => { setTimeout(function(){ sent.delete().catch((e) => console.log(e)); }, 1500) });
  let guild = message.guild 
  let invite = await message.channel.createInvite({
      maxAge: 0, 
      maxUses: 0 
    }).catch(console.error);
  message.channel.sendTyping()
  setTimeout(function(){ 
    let embed = new Discord.MessageEmbed()
    .setTitle("New Perm Server Invite")
    .setColor("GREEN")
    .setDescription(`${invite}`)
    .setTimestamp()
    message.channel.send({ embeds: [embed] }).catch((e) => guild.channels.cache.find(i => i.name === 'logs').send({content:'Error: ' + e})).catch((e) =>console.log(e)); 
   }, 2000) 
//If You Want To Log These Uncomment The Next Line
//console.log(this.invite)
}}

