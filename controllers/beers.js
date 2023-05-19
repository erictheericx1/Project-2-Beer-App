/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all beers
router.get('/', function (req, res) {
    db.Beer.find({})
        .then(beers => {
            res.render('beer-index', {
                beers: beers
            })
        })
})

// New Route 
router.get('/new', (req, res) => {
    res.render('new-form')
})

// Create Route 
router.post('/', (req, res) => {
    db.Beer.create(req.body)
        .then(beer => res.redirect('/beers/' + beer._id))
})

// Show Route 
router.get('/:id', function (req, res) {
    db.Beer.findById(req.params.id)
        .then(beer => {
            res.render('beer-details', {
                beer: beer
            })
        })
        .catch(() => res.render('404'))
})

// // Edit Route 
// router.get('/:id/edit', (req, res) => {
//     db.Beer.findById(req.params.id)
//         .then(beer => {
//             res.render('edit-form', {
//                 beer: beer
//             })
//         })
// })

// Update Route 
router.put('/:id', (req, res) => {
    db.Beer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(beer => res.redirect('/beers/' + beer._id))
})

// // Destroy Route 
// router.delete('/:id', (req, res) => {
//     db.Beer.findByIdAndRemove(req.params.id)
//         .then(() => res.redirect('/beers'))
// })


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router