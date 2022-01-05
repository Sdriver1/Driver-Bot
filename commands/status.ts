import { Client, Interaction } from 'discord.js'
import { ICommand } from 'wokcommands'

const setStatus = (client: Client, status: string) => {
  client.user?.setPresence({
    status: 'online',
    activities: [
      {
        name: status,
      },
    ],
  })
}

export default {
  category: 'Configuration',
  description: 'Updates the status for the bot',
  minArgs: 1,
  expectedArgs: '<status>',
  ownerOnly: true,
  init: (client: Client) => {
    const status = "Being made" 
    setStatus(client, status)
  },
  
  slash: 'both',
  testOnly: true,

  callback: ({ client, text}) => {
    setStatus(client, text)
    return 'Status set!'
  },
} as ICommand
