const knexModule = require('knex');
const chaineConnexion = require('../constantes');
//const { use } = require('../routes/users');

const knex = knexModule(chaineConnexion);

function getAllUser() {
    return knex('Users');
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
}

function findUserByEmail (email){
    return knex('Users')
        .where('email',email)
}

module.exports = {
    getAllUser,
    signUp,
    findUserByUsername,
    findUserByEmail
};
