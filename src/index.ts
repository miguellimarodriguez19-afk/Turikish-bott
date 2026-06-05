import { Client, GatewayIntentBits, Collection, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
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
  var commands: Collection<string, any>;
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

  // Comando !application
  if (message.content === '!application') {
    // Criar embed com a imagem e texto
    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setImage('https://cdn.discordapp.com/attachments/1512270783588597820/1512277374748725441/ChatGPT_Image_4_de_jun._de_2026_23_07_27.png?ex=6a23818e&is=6a22300e&hm=c7153cb90a86e10c087763e877d4606cad1b382cde1d391bd631ef54deea8dcb&')
      .setTitle('Carreira')
      .setDescription('Na Air Canada, Diversidade e Inclusão são essenciais para o nosso sucesso. Nós nos esforçamos para criar um ambiente de trabalho saudável e gratificante para nossos funcionários.\n\nNós prosperamos na mudança e confiamos em nosso povo para nos ajudar a cumprir nossa missão, celebrando os sucessos uns dos outros e inspirando uns aos outros quando as coisas estão mais difíceis do que o normal. Na Air Canada, não nos importamos apenas com nossos clientes, nos importamos uns com os outros também.\n\nSe uma vaga de seu interesse estiver fechada no momento, recomendamos que você permaneça conectado e fique atento a futuras vagas por meio de nossos anúncios.');

    // Enviar a mensagem com o embed
    await message.reply({ embeds: [embed] });
  }
});

client.login(process.env.DISCORD_TOKEN);
