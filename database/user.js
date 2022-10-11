const knexModule = require('knex');
const chaineConnexion = require('../constantes');

const knex = knexModule(chaineConnexion);

function getAllUser() {
    return knex('users');
}

// Requete knex qui retourne les informations de connexion
function connexion(username, password) {
    return knex('users')
        .where('username', username)
        .andWhere('password', password);
}

function signUp(username, firstName, lastName, email, password, number) {
    return knex('users')
        .insert({
            username,
            firstName,
            lastName,
            email,
            password,
            number,
        });
}

/*
function signUp(user){
   return  knex.raw('insert into users (username,firstname,lastname,email,password,number) values(?,?,?,?,?,?)',user)
}
*/

function findUserByUsername(username) {
    return knex('users')
        .where('username', username);
}

module.exports = {
    getAllUser,
    connexion,
    signUp,
    findUserByUsername,
};
