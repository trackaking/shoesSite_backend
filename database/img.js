const knexModule = require('knex');
const chaineConnexion = require('../constantes');

const knex = knexModule(chaineConnexion);


// retourne tous les images de la bd
function getImages() {
    return knex('itemsImage')
}

// ajoute un image dans la bd
function addImage(imageInfo, imgId){
    return knex('itemsImage')
    .insert({
        imgId : imgId,
        imgUrl : imageInfo.imgUrl,
        itemId : imageInfo.imgId,
        imagePosition : imageInfo.imagePosition
    })
}


module.exports = {
    getImages,
    addImage
}