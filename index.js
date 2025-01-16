const { Client, Collection, GatewayIntentBits, Events } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Create a new collection for commands
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});

// Login to Discord with your app's token
client.login(token);

// Get the events from the "events" folder
const eventsPath = path.join(__dirname, 'events');

const eventFiles = fs
    .readirSync(eventsPath)
    .filter(file => file.endsWith('.js'));

for (const file of eventFiles){
    const filepath = path.join(eventsPath, file);
    const event = require(filepath); 

    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    }else{
        client.on(event.name, (...args) => event.execute(...args));
    }
}

