const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    quantity : {
        type: Number,
        required: true
    },
    dateOfCreation:{
        type: Date,
        default: Date.now
    }
    }
);

const product = mongoose.model('product', newSchema);

module.exports = product;