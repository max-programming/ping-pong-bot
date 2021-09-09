import { Client } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.on('ready', () => {
  console.log(`${client.user.username} is ready`);
});

client.on('messageCreate', msg => {
  if (msg.author.bot) return;
  if (msg.content === '!ping') {
    msg.reply('pong');
  }
});

client.login(process.env.BOT_TOKEN);
