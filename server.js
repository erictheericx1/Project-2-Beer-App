/*Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override');


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const beersCtrl = require('./controllers/beers')
const revsCtrl = require('./controllers/reviews')


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
// Indicates where our static files are located
app.use(express.static('public'))
// Use the connect-livereload package to connect nodemon and livereload
app.use(connectLiveReload());
// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));


/* Mount routes
--------------------------------------------------------------- */
app.get('/', function (req, res) {
    db.Beer.find({ isFeatured: true })
        .then(beers => {
            res.render('home', {
                beers: beers
            })
        })
});

// When a GET request is sent to `/seed`, the beers collection is seeded
app.get('/seed', function (req, res) {
    // Remove any existing beers
    db.Beer.deleteMany({})
        .then(removedbeers => {
            console.log(`Removed ${removedbeers.length} beers`)

            // Seed the beers collection with the seed data
            db.Beer.insertMany(db.seedbeers)
                .then(addedbeers => {
                    console.log(`Added ${addedbeers.length} beers to be adopted`)
                    res.json(addedbeers)
                })
        })
});

// Render the about page
app.get('/about', function (req, res) {
    res.render('about')
});


// This tells our app to look at the `controllers/beers.js` file 
// to handle all routes that begin with `localhost:3000/beers`
app.use('/beers', beersCtrl)

// This tells our app to look at the `controllers/reviews.js` file 
// to handle all routes that begin with `localhost:3000/reviews`
app.use('/reviews', revsCtrl)


// The "catch-all" route: Runs for any other URL that doesn't match the above routes
app.get('*', function (req, res) {
    res.render('404')
});


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});