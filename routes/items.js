const express = require('express');

const request = require('../database/items');

const router = express.Router();

// route pour afficher tous les items
router.get('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    let resultat;
    try {
        resultat = await request.getAllItems();
    } catch (error) {
        res.status(500).json(error.message);
    }

    return res.status(200).json(resultat);
});

// route pour afficher un item par son id
router.get('/:id', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    let resultat;
    try {
        resultat = await request.getItemsById(req.params.id);
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error.message);
    }

    return res.status(200).json(resultat);
});

/* route pour ajouter un item
router.post('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    let resultat;
    const [itemImage, itemMark,itemPrice, itemColor, itemDetails,
        itemMaterial,itemCareInstruction, itemCategory ] = req.body;
    try {
        resultat = await request.addItem([itemImage, itemMark,itemPrice, itemColor, itemDetails,    itemMaterial,itemCareInstruction, itemCategory ]);
    } catch (error) {
        res.status(500).json(error.message);
    }
})
*/

module.exports = router;
 