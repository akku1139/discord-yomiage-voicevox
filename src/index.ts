import { Client, GatewayIntentBits } from "discord.js";

const c = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

c.on("messageCreate", async m => {
  console.log(m.content);
});

c.on("ready", () => {
  console.log(`login: ${c.user.tag}`);
});

c.login(process.env.TOKEN);
