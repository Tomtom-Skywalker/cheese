const Discord = require("discord.js");
const request = require('node-superfetch');
//
module.exports = {
  name: "cheesep",
  enabled: true,
  clientPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","GUILD_MESSAGES"],

run:async (client, message, args)=> {
        await message.reply({content:`I Am Thinking, Please Allow Me TO grab The Information From My API!`}).then((sent) => { setTimeout(function(){ sent.delete().catch((e) => console.log(e)); }, 5000) });
      
    //
    const data = await request.get('http://tomtomvader298.uk/api/JSON/cheesep.json');
    const text = JSON.parse(data.text);
      
       let answer = text[Math.floor(Math.random()*text.length)];
       let cheesei = new Discord.MessageEmbed().setColor("#2F3136")
       .setImage(`${answer}`)

        message.channel.sendTyping()
        setTimeout(function(){ 
            message.reply({embeds:[cheesei]}).then((message) =>  message.react('🧀')).catch((e) => message.guild.channels.cache.find(i => i.name === 'logs').send('Error: ' + e)).catch((e) =>console.log(e));
         }, 5000) 
console.log(this.error)
}
}