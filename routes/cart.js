const express = require('express');

const fs = require('fs');

const request = require('../database/cart');

const router = express.Router();

// const CART_DATA_FILE = path.join(__dirname, 'cartData.json');
// const CART_DATA_FILE  = require('../cartData');

// route pour afficher tous les items du cart correspondant à un username
router.get('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    let resultat;
    try {
        resultat = await request.getIAllItemsinCart();
    } catch (error) {
        res.status(500).json(error.message);
    }

    return res.status(200).json(resultat);
});

/*
//route pour ajouter un item au cart
router.post('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    let resultat;
    const {username,itemId,itemImage,itemMark } = req.body;
    try {
        resultat = await request.addItemInCart(username,itemId,itemImage,itemMark);
    } catch (error) {
        res.status(500).json(error.message);
    }
    return res.status(200).json({
        succes: true,
    });
});

*/

/*
router.post('/cart', (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
      const cartProducts = JSON.parse(data);
      const newCartProduct = {
        id: req.body.itemId,
        name: req.body.itemName,
        image: req.body.itemImage,
        //price: req.body.price,
        quantity: req.body.quantity,
      };
      let cartProductExists = false;
      cartProducts.map((cartProduct) => {
        if (cartProduct.id === newCartProduct.id) {
          cartProduct.quantity++;
          cartProductExists = true;
        }
      });
      if (!cartProductExists) cartProducts.push(newCartProduct);
      fs.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts, null, 4), () => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(cartProducts);
      });
    });
  });
*/

router.post('/', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');

    let allCartProducts;
    let cartProductExist = false;

    let resultat;
    let updateResultat;
    const {
        itemId, itemImage, itemName, quantity,
    } = req.body;
    try {
        allCartProducts = await request.getIAllItemsinCart();
        // check if the product already exist in the cart
        // if it exist, increment the quantity by 1
        allCartProducts.map((cartProduct) => {
            if (cartProduct.itemID === req.body.itemID) {
                updateResultat = request.updateItemInCart(req.body.itemID, cartProduct.quantity++);
                cartProductExist = true;
            }
        });
        if (!cartProductExist) {
            resultat = await request.addItemInCart(itemId, itemImage, itemName, quantity);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
    return res.status(200).json({
        resultat,
        updateResultat,
    });
});

module.exports = router;
