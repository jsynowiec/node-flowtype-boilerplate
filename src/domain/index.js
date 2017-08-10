/* eslint-disable import/no-dynamic-require, global-require */

const fs = require('fs');

const getFilesInDirectory = (p) => fs.readdirSync(p).filter((f) => !fs.statSync(`${p}/${f}`).isDirectory());
const getArrayFromFiles = (path) => getFilesInDirectory(path).map((filename) => require(`${path}/${filename}`).default);

const commandHandlers = getArrayFromFiles(`${__dirname}/command-handlers`);

export { commandHandlers };
