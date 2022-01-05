import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING
    ],
})

client.on('ready', () => {
    console.log('The bot is ready!')

    new WOKCommands(client,{
commandsDir: path.join(__dirname, 'commands'),
typeScript: true,
testServers: ['875594624712966184'],
botOwners: ['691506668781174824']
    })
    .setDefaultPrefix('d!')
})

const guildId = '875594624712966184'
    const guild = client.guilds.cache.get(guildId)
    let commands

   if (guild) {
      commands = guild.commands 
   } else {
       commands = client.application?.commands
    }

client.login(process.env.TOKEN)
