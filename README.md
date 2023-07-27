# Project-2-Beer-rev

![front page](public/assets/brewski-buddy.png)

Route Table
------------

|       **URL**           | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**         | **Created Yet?**  |
| ---------------         | -------------- | ------------- | --------------- | ------------------------  | ----------------- |
| /                       | N/A            | GET           | read            | home.ejs                  | YES               |
| /beers                  | index          | GET           | read            | beer-index.ejs            | YES               |
| /beers/:id              | show           | GET           | read            | beer-details.ejs, 404.ejs | YES, NO           |
| /beers/new              | new            | GET           | N/A             | new-beer.ejs              | NO                |
| /beers                  | create         | POST          | create          |                           | NO                |
| /beers/:id/edit         | edit           | GET           | read            | edit-beer.ejs             | NO                |
| /beers/:id              | update         | PATCH/PUT     | update          |                           | NO                |
| /beers/:id              | destroy        | DELETE        | delete          |                           | NO                |
| /about                  | N/A            | GET           | N/A             | about.ejs                 | NO                |
| /*                      | N/A            | GET           | N/A             | 404.ejs                   | NO                |
| /reviews/	              | index	         | GET	         | read	           | rev-index.ejs	           | NO                |
| /reviews/:id	            | show	         | GET	         | read	           | rev-details.ejs	         | NO                |
| /reviews/new/:beerId     | new	           | GET	         | read	           | new-rev.ejs	             | NO                |
| /reviews/create/:beerId  | create	       | POST	         | create		       |                           | NO                |
| /reviews/:id	            | destroy	       | DELETE	       | delete		       |                           | NO                |


Installation Instructions
-------------

- Fork and clone this reository
- Initialize NPM
- install node.js, express.js and configure .json package
- creat .env nd use PORT = 3000
- run nodemon server.js and in browser, go to 'http://localhost:3000'


Technologies used
------------

I used HTML, CSS, JavaScript, Bootstrap, Github, node.js, MongoDB/mongoose, Express.js and Visual Studio Code.


User Stories
----------

As a beginning beer drinker, I want to better accustom myself so I can decide if drinking beer is for me.

I prefer wine, my husband likes beer. I want to get to know more about it so I can surprise him and we can enjoy a beverage together without fighting about choice of drink.

As a verteren beer drinker, I don't know much about what I drink. I also just drink one kind of beer. I want to expand my horizons and see what else is out there.


Wireframe
---------

I used [moqups.com](https://moqups.com/) to make my wireframe.  

 - [Home](public/assets/Wireframe/home.jpg)
 - [index](public/assets/Wireframe/beer-index.jpg)
 - [details](public/assets/Wireframe/beer-detail.jpg)
 - [404](public/assets/Wireframe/404.jpg)

Unsolved Problems/ Major Hurdles
-------------------------

### Unsolved Problems: 
although I was able to make it responsive, it wasn't to  my liking.  I would like it to be a bit smoother and customize some aspects of bootstrap a bit more.

### Major Hurdles:
I had a lot of minor errors that took a lot of time to find and correct.  A misspelling or an "s" were there shouldn't be one.  Also, as much as I enjoy CSS, it does give me a lot of issues.  I look forward to learning more.