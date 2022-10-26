/*const chaineConnexion = {
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


const chaineConnexion = {
    client: 'mssql',
    connection: {
        host: 'sv55.cmaisonneuve.qc.ca',
        user: '5D1Equipe03',
        password: 'KmM8bd5GVPEV2xBooUUuRfn0XJYWAY',
        database: '5D1Equipe03',
        options: {
            enableArithAbort: false,
        },
    },
    pool: { min: 0, max: 7 },
    useNullAsDefault: true,
};


*/


const chaineConnexion ={
    client: 'sqlite3',
    connection: {
      filename: "shoesSite.sqlite3"      
    } ,
    useNullAsDefault: true
  };



module.exports = chaineConnexion;
