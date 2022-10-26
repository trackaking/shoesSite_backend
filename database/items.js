const knexModule = require('knex');
const chaineConnexion = require('../constantes');

const knex = knexModule(chaineConnexion);

function getAllItems() {
    return knex('items');
}

function getItemsById(itemId) {
    return knex('items')
        .where('id', itemId);
}

function addItem(item , itemId) {
    return knex('items')
        .insert({
            itemName : item.itemName,
            itemPrice : item.itemPrice,
            quantity : item.quantity,
            itemDescription : item.itemDescription,
            reviewCount : item.reviewCount,
            reviewScore : item.reviewScore,
            Type : item.Type,
            brand : item.brand,
            itemId : itemId
        });
}

module.exports = {
    getAllItems,
    getItemsById,
    addItem,
};
