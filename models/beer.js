// Require the Mongoose package
const mongoose = require('mongoose');
const reviewSchema = require('./review.js');

// Create a schema to define the properties of the pets collection
const beerSchema = new mongoose.Schema({
    type: { type: String, required: true },
    alcoholByVolume: { type: Number, required: true },
    photo: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    variations: { type: String, required: true },
    foodPairings: { type: String, required: true },
    reviews: [reviewSchema]
    // isFeatured: { type: Boolean, default: false },
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Beer', beerSchema);
