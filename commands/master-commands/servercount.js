
module.exports = {
  name: "servercount",
  enabled: true,
  clientPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","GUILD_MESSAGES"],

run:async (client, message, args)=> {
  await message.reply({content:`I Am Gathering The Command Information For You, Please Wait <@${message.author.id}>`}).then((sent) => { setTimeout(function(){ sent.delete().catch((e) => console.log(e)); }, 1500) });
  message.channel.sendTyping()
  setTimeout(function(){ 
    message.reply({content : 'Fetching Servers...'}).then(sent => {
      sent.edit({content : `I Am In ${client.guilds.cache.size} Servers, Giving Free Cheese To Thy Worthy ones`});
    }).catch(console.error);
   }, 2000) 

}}

