const express = require('express');

const jwt = require('jsonwebtoken');

const request = require('../database/user');

const router = express.Router();

const bcrypt = require('bcryptjs');


// route pour se connecter
router.post('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    let resultat;
    let accessToken;
    let success = true;
    let message = '';
    const date = new Date(); // date initialisation
    let time = '';
    let password;
 

    try {
        const { username} = req.body;
        password = req.body.password;
        resultat = await request.findUserByUsername(username);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error);
    }
    if (resultat.length != 0) {
        const verifyPassword = bcrypt.compareSync(password, resultat[0].password);
        if (verifyPassword === true) {
            const expiresIn = '24h';
            accessToken = jwt.sign({ username: resultat[0].username }, process.env.TOKEN_KEY, {
                expiresIn,
            });
            time += `Token Generated at:- ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        } else {
            success = false;
            message += "le mot de passe est incorrect.Essayez de nouveau";
        }
    } else{
        success = false;
        message += " le username est incorrect. Essayez de nouveau";
    }

    return res.json({
        success: success,
        access_token: accessToken,
        time: time,
        message : message
    });
});

module.exports = router;
