/* eslint-disable import/no-dynamic-require, global-require */

const fs = require('fs');

const getDirectoriesInPath = (p) => fs.readdirSync(p).filter((f) => fs.statSync(`${p}/${f}`).isDirectory());
const getFilesInDirectory = (p) => fs.readdirSync(p).filter((f) => !fs.statSync(`${p}/${f}`).isDirectory());
const getArrayFromFiles = (path) =>
  getFilesInDirectory(path)
    .map((filename) => require(`${path}/${filename}`).default)
    .reduce((prev, curr) => prev.concat(curr));

const connections = getArrayFromFiles(`${__dirname}/connections`);

const infrastructurePlugins = getArrayFromFiles(`${__dirname}/registrations`);
const routePlugins = getDirectoriesInPath(`${__dirname}/../routes`).map((d) => ({ plugin: `./routes/${d}` }));
const registrations = [].concat(infrastructurePlugins, routePlugins);

export { connections, registrations };
