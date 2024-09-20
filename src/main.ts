import { Client, Events } from 'discord.js';
import { config } from 'dotenv';

// Load config from our .env file
config();

const client = new Client({
  intents: [] // Add any intents your bot requires
});

client.once(Events.ClientReady, () => {
  console.log(`Ready! 🚀`);
});

const start = async () => {
  console.log('Starting in 3 seconds.');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('Connecting to discord...');
  await client.login(process.env['DISCORD_TOKEN']);
};

start();
