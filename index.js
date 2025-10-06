const { Client, Collection } = require("discord.js");
const { loadSlash } = require("./Handlers/slashcommands.js");
require('dotenv').config();
const client = new Client({ intents: 53575421 });

client.slashcmd = new Collection();

client.on("ready", async (client) => {
	console.log(`[Bot] >> Iniciamos como el bot ${client.user.tag}`);

	loadSlash(client)
});

client.on("interactionCreate", async (interaction) => {
	if(interaction.isChatInputCommand()){
		const cmd = client.slashcmd.get(interaction.commandName)
		if(!cmd) return;

		await cmd.execute(interaction, client)
	}
})

const keepAlive = require("./keepAlive.js");
keepAlive();

client.login(process.env.TOKEN);