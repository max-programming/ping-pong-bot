import { Client } from 'discord.js';
import dotenv from 'dotenv';
import fastify from 'fastify';

dotenv.config();

const server = fastify({ logger: true });

server.all('/', (_, reply) => {
  reply.send('Bot is running');
});

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

server.listen(process.env.PORT || 8000, () => {
  console.log('Bot is running');
});

client.login(process.env.BOT_TOKEN);
