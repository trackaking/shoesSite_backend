const knexModule = require('knex');
const chaineConnexion = require('../constantes');

const knex = knexModule(chaineConnexion);

function getAllItems() {
    return knex('itemsJson');
}

function getItemsById(id) {
    return knex('items')
        .where('id', id);
}

function addItem(item) {
    return knex('items')
        .insert(item);
}

module.exports = {
    getAllItems,
    getItemsById,
    addItem,
};
