//Do Not Change Anything Here, Unless You Know What You Are Doing This Is How We Connect To Discord And Read Commands!!
const Discord = require("discord.js");
//
require('events').EventEmitter.defaultMaxListeners = 0
//
const client = new Discord.Client( { intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] } );
const config = require("./config.json");
const emojilist = require('./assets/emojilist.js');
//
client.on("ready", () =>{
    console.log(`Logged Into The Discord Client In ${client.ws.ping}ms!`);
    console.log(`Ready! Logged Into Discord Under The Name Of ${client.user.tag}, In ${client.guilds.cache.size} Servers`);
    setInterval(() => {
      const statuses = [
        `CHEESE 🧀🧀🧀`,
        `Eating Cheese 🧀`,
        `🧀🧀🧀`,
        `Prefix: [${config.prefix}]`,
        `${emojilist.c}${emojilist.h}${emojilist.e}${emojilist.e}${emojilist.s}${emojilist.e} 🧀`,
        `Help: [${config.prefix}help]`
            ];
      const Activity = [
        `WATCHING`,
        `PLAYING`,
        `COMPETING`,
        `LISTENING`,
      ];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const a = Activity[Math.floor(Math.random() * Activity.length)];
      client.user.setActivity(status, { type: `${a}` });
    }, 20000);
 })
//
client.config = config;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["commands", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

//===================================================\\
client.on("guildCreate", guild => {
  let server = guild.name
  let found = 0;
  guild.channels.cache.map((channel) => {
      if (found === 0) {
        if (channel.type === "GUILD_TEXT") {
          if (channel.permissionsFor(client.user).has("VIEW_CHANNEL")) {
            if (channel.permissionsFor(client.user).has("SEND_MESSAGES")) { 
              let hi = new Discord.MessageEmbed().setColor(config.c)
              .setTitle(`Hello ${server}, I Am ${client.user.username} [🧀]`).setURL("http://tomtomvader298.uk").setDescription("```diff\n+ Thanks For Adding Me You Have Made Me Blush! \n```").addField(`Im Happy To Of Been Invited To Join & Help ${server}`, `My Prefix Is "[${config.prefix}]", To Get Started Say: [${config.prefix} help]`)
              channel.send({embeds:[hi]})
              found = 1;
            }
          }
        }
      }
    });
})

//======================================================\\

client.login(config.token);