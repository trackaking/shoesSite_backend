const knexModule = require('knex');
const chaineConnexion = require('../constantes');
const { use } = require('../routes/users');

const knex = knexModule(chaineConnexion);

function getAllUser() {
    return knex('Users');
}

// Requete knex qui retourne les informations de connexion
function connexion(username, password) {
    return knex('users')
        .where('username', username)
        .andWhere('password', password);
}

function signUp(user) {
    return knex('users')
        .insert({
            username : user.username,
            firstName : user.firstName,
            lastName : user.lastName,
            email : user.email,
            password : user.password,
        });
}


function findUserByUsername(username) {
    return knex('users')
        .where('username', username)
        .select('username')
}

function findUserByEmail (email){
    return knex('Users')
    .where('email',email)
    .select('email')
}

module.exports = {
    getAllUser,
    connexion,
    signUp,
    findUserByUsername,
    findUserByEmail
};
