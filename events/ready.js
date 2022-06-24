const Client = require('../index').Client
const config = require('../config.json')
const discord = require('discord.js')
//webhook
const { MessageEmbed, WebhookClient, GuildMember, Message } = require('discord.js');



Client.on('ready', async () => {
    console.log(`${Client.user.tag} Er online!`)
    Client.user.setActivity(`StreetRP`, {
        type: "WATCHING"
    })
})


