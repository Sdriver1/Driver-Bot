"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setStatus = (client, status) => {
    var _a;
    (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        status: 'online',
        activities: [
            {
                name: status,
            },
        ],
    });
};
exports.default = {
    category: 'Configuration',
    description: 'Updates the status for the bot',
    minArgs: 1,
    expectedArgs: '<status>',
    ownerOnly: true,
    init: (client) => {
        const status = "Being made";
        setStatus(client, status);
    },
    slash: 'both',
    testOnly: true,
    callback: ({ client, text }) => {
        setStatus(client, text);
        return 'Status set!';
    },
};
