// Require the Mongoose package
const mongoose = require('mongoose');
const reviewSchema = require('./review.js');

// Create a schema to define the properties of the beers collection
const beerSchema = new mongoose.Schema({
    type: { type: String, required: true },
    alcoholByVolume: { type: Number, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    variations: { type: String, required: true },
    foodPairing: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    reviews: [reviewSchema]
});

// Export the schema as a Monogoose model. 
module.exports = mongoose.model('Beer', beerSchema);
