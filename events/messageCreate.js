module.exports.event = "messageCreate"
module.exports.run = async (client,message) => {

if (message.author.bot || !message.guild) return;

if (!message.content.startsWith(client.config.prefix)) return;

if (!message.member) message.guild.fetchMembers(message);

const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);

const cmd = args.shift().toLowerCase();

if (cmd.length === 0) return;

let command = client.commands.get(cmd) 

if (!command) return message.channel.send({content:"```diff\n-[UNKNOWN COMMAND]\n```"});

if (command) command.run(client, message, args)

}