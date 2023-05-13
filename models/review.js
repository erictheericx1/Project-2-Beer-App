const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    reviewer: {type: String, required: true},
    beerType: {type: String, required: true},
    title: {type: String, required: true},
    rating: {type: Number, min: 0, default: 0},
    review: {type: String, required: true}
});
module.exports = reviewSchema;