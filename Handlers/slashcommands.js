const { readdirSync } = require("node:fs");

module.exports = {
	async loadSlash(client){
		let GuardCmd = [];

		for(const Carpeta of readdirSync(`./slashcommands`)){
			for(const Comandos of readdirSync(`./slashcommands/${Carpeta}`).filter(file => file.endsWith('.js'))){
				const commands = require(`../slashcommands/${Carpeta}/${Comandos}`);
                client.slashcmd.set(commands.data.name, commands);

                GuardCmd.push(commands.data.toJSON());
			}
		}
		client.application.commands.set(GuardCmd);

		console.log(`[Bot] >> Comandos Recargados`)
	}
}