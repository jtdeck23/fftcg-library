const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    cost: {
        type: Number,
        required: true
    },
    element: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    power: {
        type: Number,
        required: false
    },
    opus: {
        type: Number,
        required: false
    },
    rarity: {
        type: String,
        required: false
    }
});

const Card = mongoose.model('card', CardSchema);

module.exports = Card;