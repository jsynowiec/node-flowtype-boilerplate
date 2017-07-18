const connections = require('./connections.js');
const fs = require('fs');

const infrastructurePlugins = require('./infrastructure.js');
const dirs = (p) => fs.readdirSync(p).filter((f) => fs.statSync(`${p}/${f}`).isDirectory());
const modulePlugins = dirs(`${__dirname}/../routes`).map((d) => ({ plugin: `./routes/${d}` }));
const registrations = [].concat(infrastructurePlugins, modulePlugins);

const manifest = {
  connections,
  registrations,
};

module.exports = manifest;
