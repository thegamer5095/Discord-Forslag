const Client = require('../index').Client
const discord = require('discord.js')
const config = require('../config.json')
const { Modal, TextInputComponent,showModal  } = require('discord-modals') // Modal and TextInputComponent class

Client.on('interactionCreate', async (Interaction) => {
    if (Interaction.isButton()) {
       if (Interaction.customId === "whitelist") { // hvilken knap?
            const modal = new Modal() 
            .setCustomId('forslag')
            .setTitle('Kom med et forslag!')
            .addComponents([
             new TextInputComponent() 
               .setCustomId('firstrepond')
               .setLabel('Forslag:')
               .setStyle('LONG')
               .setPlaceholder('Hvad er dit forslag?')
               .setRequired(true),
               new TextInputComponent()
               .setCustomId('secondrespons')
               .setLabel('Hvorfor?')
               .setStyle('LONG')
               .setPlaceholder('Hvorfor skal vi vælge dit forslag?')
            ]);

            showModal(modal, {
               client: Client,
               interaction: Interaction 
            })
       
       } 
    } 
})


