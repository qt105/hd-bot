const { Client, Collection, GatewayIntentBits, Events } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: GatewayIntentBits.NonPrivileged });

// Create a new collection for commands
client.once(Events.clientReady, readyClient => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});

// Login to Discord with your app's token
client.login(token);