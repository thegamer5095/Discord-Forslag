const { MessageEmbed, Interaction } = require('discord.js');
const Client = require('../index').Client
const config = require('../config.json')

Client.on('modalSubmit', async (m) => {
    if(m.customId === 'forslag'){
       let firstResponse = m.getTextInputValue('firstrepond')
       let secondResponse = m.getTextInputValue('secondrespons')
       let thredResponse = m.getTextInputValue('thredrespons')
 
       const embed = new MessageEmbed()
       .setAuthor(`${m.user.username}`)
       .setColor(config.color)
       .setDescription('Der er kommet et nyt forslag!')
       .addField('Forslag:', `${firstResponse}`)
       .addField('Hvorfor dette forslag?', `${secondResponse}`)
       .addField('Billede/Video?', `${thredResponse}`)
 
       const embed2 = new MessageEmbed()
       .setAuthor('StreetRP - Forslagssystem')
       .setColor(config.color)
       .setDescription('Dit forslag er nu indsendt, og afventer svar!')
 
       await m.deferReply({ ephemeral: true })
       m.followUp({ embeds: [embed2], ephemeral: true })
       await Client.channels.cache.get(config.forslag).send({ embeds: [embed]})
    }
})