"use strict"


const express = require('express');

const request = require('../database/items');

const router = express.Router();

const uuidv4 = require("uuid")



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


//route pour ajouter un item dans la bd
router.post('/', async(req,res)=> {
    let succes = false; 
    let resultat;
    let message = '';

const{
    itemName,
    itemPrice,
    quantity,
    itemDescription,
    reviewCount,
    reviewScore,
    Type,
    brand
} = req.body

    let item = {
        itemName : itemName,
        itemPrice : itemPrice,
        quantity : quantity,
        itemDescription : itemDescription,
        reviewCount : reviewCount,
        reviewScore : reviewScore,
        Type : Type,
        brand : brand
    } = req.body
    

    try{
        resultat = await request.addItem(item, uuidv4.v4())
        console.log(resultat)
        if (resultat.lenght != 0){
            succes = true
            message += "L'item a été ajouté avec succès"
        } else {
            message +="L'item n'a pas pu être ajouté"
        }

    } catch(error){
        return res.status(500).send(error.message)
    }

    return res.json({
        succes : succes,
        message : message
    })
})

module.exports = router