"use strict";

const express = require('express');
require('dotenv').config();

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const connexionRouter = require('./routes/userLogin');
const singUpRouter = require('./routes/userSignup');
const itemsRouter = require('./routes/items');
const itemRouter = require('./routes/item')
const cartRouter = require('./routes/cart');
const userRouter = require('./routes/users');

app.use(cors());
app.use(express.json());


app.use('/login', connexionRouter);
app.use('/signup', singUpRouter);
app.use('/items', itemsRouter);
app.use('/cart', cartRouter);
app.use('/users', userRouter);
app.use('/item', itemRouter)

app.listen(PORT, () => {
    console.log(`Mon application roule sur http://localhost:${PORT}`);
});
