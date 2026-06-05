import { Client, GatewayIntentBits, Collection } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
});

// Declare commands collection
declare global {
  namespace NodeJS {
    interface Global {
      commands: Collection<string, any>;
    }
  }
}

globalThis.commands = new Collection();

client.once('ready', () => {
  console.log(`✅ Bot conectado como ${client.user?.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  
  if (message.content === '!ping') {
    await message.reply('Pong! 🏓');
  }
});

client.login(process.env.DISCORD_TOKEN);
