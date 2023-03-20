/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')
// const beer = require('../models/beer');

/* Routes
--------------------------------------------------------------- */
// Index Route 
router.get('/', (req, res) => {
    db.Beer.find({}, { reviews: true, _id: false })
        .then(beers => {
            const flatList = []
            for (let beer of beers) {
                flatList.push(...beer.reviews)
            }
            console.log(flatList, beers)
            res.render('reviews/rev-index.ejs', {
                revs: flatList
            })
        })
});


// New Route
router.get('/new/:beerId', (req, res) => {
    db.Beer.findById(req.params.beerId)
        .then(beer => {
            res.render('reviews/new-form', { beer: beer })
        })
        .catch(() => res.render('404'))
})

router.get('/read/:id', (req, res) => {
    db.Beer.findOne(
        { 'reviews._id': req.params.id },
        { 'reviews.$': true, _id: false }
    )
        // .then(product => {
        //     console.log(product)
        //     res.render('reviews/app-details'), {
        // })
        .then(beer => {
            console.log(beer)
            res.render('reviews/rev-details', {
                app: beer.reviews[0]
            })
        })
})
// Create Route
router.post('/create/:beerId', (req, res) => {
    db.Beer.findByIdAndUpdate(
        req.params.beerId,
        { $push: { reviews: req.body } },
        { new: true }
    )
        .then(() => res.redirect('/reviews'))
});


// Show Route
router.get('/:id', (req, res) => {
    db.Beer.findOne(
        { 'reviews._id': req.params.id },
        { 'reviews.$': true, _id: false }
    )
        .then(beer => {
            res.render('reviews/rev-details', {
                app: beer.reviews[0]
            })
        })
        .catch(() => res.render('404'))
});


// Destroy Route
router.delete('/:id', (req, res) => {
    db.Beer.findOneAndUpdate(
        { 'reviews._id': req.params.id },
        { $pull: { reviews: { _id: req.params.id } } },
        { new: true }
    )
        .then(() => res.redirect('/reviews'))
});


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
