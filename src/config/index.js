const connections = require('./connection.js');
const fs = require('fs');

const infrastructurePlugins = require('./infrastructure.js');

const dirs = (p) => fs.readdirSync(p).filter((f) => fs.statSync(`${p}/${f}`).isDirectory());
const modulePlugins = dirs(`${__dirname}/../routes`).map((d) => ({ plugin: `./routes/${d}` }));

const manifest = {
  connections: [
    connections,
  ],
  registrations: [].concat(infrastructurePlugins, modulePlugins),
};

module.exports = manifest;
