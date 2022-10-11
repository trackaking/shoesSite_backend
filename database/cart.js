const knexModule = require('knex');
const chaineConnexion = require('../constantes');

const knex = knexModule(chaineConnexion);

function getIAllItemsinCart() {
    return knex('cart');
}

function getItemsInCart(username) {
    return knex('cart')
        .where('cartId', username);
}

function addItemInCart(itemID, itemImage, itemName, quantity) {
    return knex('cart')
        .insert({
            itemID,
            itemImage,
            itemName,
            quantity,
        });
}

function updateItemInCart(itemID, quantity) {
    return knex('cart')
        .where('itemID', itemID)
        .update({
            quantity,
        });
}

module.exports = {
    getIAllItemsinCart,
    getItemsInCart,
    addItemInCart,
    updateItemInCart,
};
