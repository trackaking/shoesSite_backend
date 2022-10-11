const express = require('express');

const jwt = require('jsonwebtoken');

const request = require('../database/user');

const router = express.Router();

const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    let resultat;
    try {
        resultat = await request.getAllUser();
    } catch (error) {
        res.status(500).json(error.message);
    }

    return res.status(200).json(resultat);
});

// route pour se connecter
router.post('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    let resultat;
    try {
        const { username, password } = req.body;
        resultat = await request.findUserByUsername(username);
        if (resultat.lenght === 0) {
            // res.status(400).send("this username doesn't exist ");
            console.log("this username doesn't exist ");
        }
        const result = bcrypt.compareSync(password, resultat[0].password);
        if (result === false) {
            // res.status(400).send('The password is incorrect');
            console.log('The password is incorrect ');
        }
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
    const expiresIn = 14400;
    const accessToken = jwt.sign({ username: resultat[0].username }, process.env.TOKEN_KEY, {
        expiresIn,
    });

    return res.status(200).json({
        succes: true,
        username: resultat[0].username,
        access_token: accessToken,
        expires_in: expiresIn,
    });
});

module.exports = router;
