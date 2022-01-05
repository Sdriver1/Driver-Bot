import { Message } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Testing Commands',

    slash: 'both',
    testOnly:true,

    callback: ({}) => {
        return 'testing'
    },
} as ICommand