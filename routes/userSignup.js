"use strict"

const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const request = require('../database/user');
const uuidv4 = require("uuid");

// functions 
function VerifyUserSignup(userinfo){

}

// ----------------------------------------------------------------------------------------




// sign up de l'utilisateur
router.post('/', async (req, res) => {
    let resultat;
    let succes = false;
    let message = '';


const {
    username,
    firstName,
    lastName,
    email,
    password
} = req.body

let userInfo = {
    username : username,
    firstName : firstName,
    lastName : lastName,
    email : email,
    password : password
} 


    try {
        //encrypt the password
        userInfo.password = bcrypt.hashSync(userInfo.password);
        //verify if the username and the email are not already in the database
        const verifyUsername = await request.findUserByUsername(userInfo.username);
        const verifyEmail = await request.findUserByEmail(userInfo.email);

        if (verifyUsername.length != 0) {
            message += 'this username already exist please chose another one ';
            if (verifyEmail.length != 0) {
                message += '\nthis email already exist please chose another one';
            }

        } else {
            resultat = await request.signUp(userInfo, uuidv4.v4());
            succes = true;
        }

    } catch (error) {
        res.status(500).send(error.message);
        console.log(error);
    }


    return res.json({
        succes: succes,
        message: message
    });
});

module.exports = router;
