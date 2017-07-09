const fs = require('fs')

const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(p+"/"+f).isDirectory())

const infrastructure_plugins = require('./infrastructure.js');

const module_plugins = dirs(__dirname + '/../routes').map((d) => { 
    return { "plugin": `./routes/${d}`};     
});

const manifest = {
   "connections": [
      require('./connection.js')
   ],
   "registrations": [].concat(infrastructure_plugins, module_plugins) 
};

module.exports = manifest;