import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILDS
    ]
})

client.on('ready', () => {
    console.log('The bot is ready!')
})

client.on('messageCreate', (message) => {
    if (message.content === 'Driver') {
        message.reply({
            content: 'Domain',
        })
    }
})

client.login(process.env.TOKEN)
