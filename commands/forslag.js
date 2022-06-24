const Discord = require('discord.js');
const config = require('../config.json');


module.exports.run = async (Client, message, args, prefix) => {
//if (!args[0]) return message.channel.send('Du skal skrive en besked som skal stå i din whitelist create embed!')
const embed = new Discord.MessageEmbed()
.setTitle("Forslag")
.setColor('AQUA')
.setDescription("Har du et godt forslag til serveren, som du bare vil have ind? Tryk på knappen neden under, og udfyld felterne, så vi en udvikler, eller ejer tjekke dit forslag igennem!")
//args.slice(0).join(' ')
const embedlinks = new Discord.MessageActionRow().addComponents(
    new Discord.MessageButton()
        .setCustomId('whitelist')
        .setLabel('✅ Indsend et forslag')
        .setStyle('SUCCESS'),
)
message.delete()
message.channel.send({ embeds: [embed],  components: [embedlinks]});
}


module.exports.help = {
    name: 'whitelist',
    aliases: ['wht'],
}