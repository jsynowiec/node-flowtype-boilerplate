const Pack = require('../package.json');

module.exports = [
    {
        plugin: {
            register: "inert"
        }
    },
    {
        plugin: {
            register: "vision"
        }
    },
    {
        plugin: {
            register: "hapi-swagger",
            options: {
                info: {
                    title: `${Pack.name} API Documentation`,
                    version: Pack.version,
                }            
            }
        }
    },
    {
        plugin: {
            register: "blipp"
        }
    },
    {
        plugin: {
            register: "good",
            options: {
                reporters: {
                    console: [
                    {
                        module: "good-console"
                    },
                    "stdout"
                    ]
                }
            }
        }
    }
];