import { Client, GatewayIntentBits } from "discord.js";

const c = new Client();

c.on("messageCreate", async m => {
  console.log(m.content);
});