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


module.exports = router;
 