const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
	    .setName("ip")
	    .setDescription("connect"),

    async execute(interaction){
    	const embed = new EmbedBuilder()
    	  .setColor(0xFF0000)
    	  .setTitle("<a:flechablanca:1339386415095484446> ¡Puedes entrar! <a:flechablanca:1339386415095484446>")
    	  .setDescription("  - Segui los pasos para conectarte de forma directa al servidor!.")
    	  .addFields({ name: "Abri la consola en el menu de Fivem (F8) y coloca :", value: "connect cfx.re/join/zx7d3p"})
    	  .setFooter({ text: "CostaneraRP", iconURL: interaction.client.user.displayAvatarURL()})
    	  .setTimestamp();

        await interaction.reply({ 
            content: " ## <a:logoanimated:1424808124681949275> • **__¡SERVIDOR ABIERTO!__**  <a:logoanimated:1424808124681949275>  <@&1036532742160138261>   <a:pin:1148476023751573544>",
        	embeds: [embed]
            allowedMentions: { roles: ['1036532742160138261'] } 
        });
    	}
    };