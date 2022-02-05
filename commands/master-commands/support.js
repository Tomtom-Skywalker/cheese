const Discord = require("discord.js");
const { MessageActionRow, MessageButton} = require('discord.js');
//
module.exports = {
  name: "support",
  enabled: true,
  clientPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","GUILD_MESSAGES"],

run:async (client, message, args, params)=> {
  await message.reply({content:`I Am Gathering The Command Information For You, Please Wait <@${message.author.id}>`}).then((sent) => { setTimeout(function(){ sent.delete().catch((e) => console.log(e)); }, 1500) });
  message.channel.sendTyping()
  setTimeout(function(){ 
    let guild = message.guild
    const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setURL('https://discord.gg/faU3m8CpYd')
            .setLabel('Click Me To Go To My Support Server')
            .setStyle('LINK')
                      .setEmoji('🌐')
                     .setDisabled(false),
            )
        message.reply({content: "Support!", components: [row]}).catch((e) => guild.channels.cache.find(i => i.name === 'logs').send('Error: ' + e)).catch((e) =>console.log(e));
   }, 2000) 

}}

