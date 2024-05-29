const express = require('express');
const router = express.Router();
const product = require('../schema/productSchema');

router.post('/add', async (req, res) => {
    const { name, color, quantity } = req.body;
    try{
        const newProduct = new product({ name, color, quantity });
        await newProduct.save().then((savedPost) => {
            res.status(200).json(savedPost);
            console.log(savedPost);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error saving post' });
            console.log(error);
        });;
    } catch(error){
        res.status(500).json({ error: 'Error retrieving latest post' });
    }
});


module.exports = router;