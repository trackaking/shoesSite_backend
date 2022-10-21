const chaineConnexion = {
    client: 'mssql',
    connection: {
        host: 'localhost',
        user: 'trackaking',
        password: 'stephen001',
        database: 'Crypto',
        options: {
            encrypt: false,
            port: 1433,
        },
    },
};

module.exports = chaineConnexion;
