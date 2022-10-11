const express = require('express');

const request = require('../database/user');

const router = express.Router();

// route pour get les infos d'un user grâce à son username
router.get('/', async (req, res) => {
    const { username } = req.body;
    let resultat;
    try {
        resultat = await request.findUserByUsername(username);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
    return res.status(200).json(resultat);
});

module.exports = router;
