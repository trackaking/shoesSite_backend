"use strict"


const express = require('express');

const request = require('../database/img');

const router = express.Router();

const uuidv4 = require("uuid")


// permet d'ajouter un image dans la bd
router.post('/', async (req,res) => {
    
    let succes = false
    let resultat;
    let message = '';
    
    const {
        imgUrl,
        itemId,
        imagePosition
    } = req.body

    let imageInfo = {
        imgUrl : imgUrl,
        itemId : itemId,
        imagePosition : imagePosition
    }
    
    try {
        resultat = await request.addImage(imageInfo, uuidv4.v4())
        if (resultat.length != 0){
            succes = true;
            message += "L'image a été ajouté avec succès"
        } else {
            message += "Une erreur est survenue"
        }

    } catch(error) {
        res.status(500).send(error.message)
    }
    return res.status(200).json({
        success : succes,
        message : message
    })
})


//permet d'avoir tous les images dans la bd
router.get('/', async(req,res) =>{

    let resultat;
    let success = false;
    let message = ''

    try {
        resultat = await request.getImages()
        success = true

    } catch(error) {
        res.status(500).send(error.message)
    }
    return res.status(200).json({
        success : success,
        resultat
    })
})

module.exports = router