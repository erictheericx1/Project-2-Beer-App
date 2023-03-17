# Project-2-Beer-App

Route Table
------------

|       **URL**       | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**            | **Created Yet?**  |
| ---------------     | -------------- | ------------- | --------------- | ------------------------     | ----------------- |
| /                   | N/A            | GET           | read            | home.ejs                     | YES               |
| /beers           | index          | GET           | read            | beer-index.ejs            | YES               |
| /beers/:id       | show           | GET           | read            | beer-details.ejs, 404.ejs | YES, NO           |
| /beers/new       | new            | GET           | N/A             | new-beer.ejs              | NO                |
| /beers           | create         | POST          | create          |                              | NO                |
| /beers/:id/edit  | edit           | GET           | read            | edit-beer.ejs             | NO                |
| /beers/:id       | update         | PATCH/PUT     | update          |                              | NO                |
| /beers/:id       | destroy        | DELETE        | delete          |                              | NO                |

| /about              | N/A            | GET           | N/A             | about.ejs                    | NO                |
| /*                  | N/A            | GET           | N/A             | 404.ejs                      | NO                |


Installation Instructions
-------------

- Fork and clone this reository
- Open 'index.html' file in your editor


Technologies used
------------

I used HTML, CSS, JavaScript, Bootstrap, Github, node.js, MongoDB/mongoose, Express.js and Visual Studio Code.


User Stories
----------

As a beginning beer drinker, I want to better accustom myself so I can decide if drinking beer is for me.
I prefer wine, my husband likes beer. I want to get to know more about it so I can surprise him and we can enjoy a beverage together without fighting about choice of drink.
As a verteren beer drinker, I don't know much about what I drink. I also just drink one kind of beer. I want to expand my horizons and see what else is out there


Wireframe
---------

I used [moqups.com](https://moqups.com/) to make my wireframe.  

 - [Home]()
 - [Projects]()
 - [Resume]()
 - [Mobile view]()

