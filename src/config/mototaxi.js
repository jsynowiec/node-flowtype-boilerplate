const domain = require('../domain');

module.exports = {
    logger: { log: (message) => { console.log(`mototaxi: ${message}`) } },
    commandHandlers: domain.commandHandlers,
};