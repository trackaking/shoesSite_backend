const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs'); 
const request = require('../database/user');

router.get('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    let resultat;
    username = req.body.username;
    try {
        resultat = await request.findUserByUsername(username);
    } catch (error) {
        res.status(500).json(error.message);
    }

    return res.status(200).json(resultat);
});

// sign up de l'utilisateur
router.post('/', async (req, res) => {
    let resultat;
    const {
        username, firstName, lastName, email, number,
    } = req.body;
    const password = bcrypt.hashSync(req.body.password);
    try {
       const user = await request.findUserByUsername(username);
        if (user.length === 0) {
            resultat = await request.signUp(username, firstName, lastName, email, password, number);
            console.log(resultat);
        } else {
            res.status(400).send('username already exist please chose another one');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Something is wrong');
    }
    return res.status(200).json({
        succes: true,
    });
});

module.exports = router;
