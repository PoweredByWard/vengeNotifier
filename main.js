const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Under development",{ type: "PLAYING" })
});
client.login(process.env.TOKEN);
