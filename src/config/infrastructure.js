module.exports = [
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