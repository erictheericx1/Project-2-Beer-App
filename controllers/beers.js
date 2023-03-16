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

// New Route (GET/Read): This route renders a form 
// which the user will fill out to POST (create) a new beer
router.get('/new', (req, res) => {
    res.render('new-form')
})

// Create Route (POST/Create): This route receives the POST request sent from the new route,
// creates a new beer document using the form data, 
// and redirects the user to the new beer's show page
router.post('/', (req, res) => {
    db.Beer.create(req.body)
        .then(beer => res.redirect('/beers/' + beer._id))
})

// Show Route (GET/Read): Will display an individual beer document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Beer.findById(req.params.id)
        .then(beer => {
            res.render('beer-details', {
                beer: beer
            })
        })
        .catch(() => res.render('404'))
})

// Edit Route (GET/Read): This route renders a form
// the user will use to PUT (edit) properties of an existing beer
router.get('/:id/edit', (req, res) => {
    db.Beer.findById(req.params.id)
        .then(beer => {
            res.render('edit-form', {
                beer: beer
            })
        })
})

// Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 
// edits the specified beer document using the form data,
// and redirects the user back to the show page for the updated location.
router.put('/:id', (req, res) => {
    db.Beer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(beer => res.redirect('/beers/' + beer._id))
})

// Destroy Route (DELETE/Delete): This route deletes a beer document 
// using the URL parameter (which will always be the beer document's ID)
router.delete('/:id', (req, res) => {
    db.Beer.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/beers'))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router