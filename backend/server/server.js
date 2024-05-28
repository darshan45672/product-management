const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser')

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connectDB = require('../connection/connection');
connectDB();
const product = require('../schema/productSchema');

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});