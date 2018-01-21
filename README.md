## Where In The World Is My Recipe Project

## How to run the app

1. The server is running on Heroku -- https://hidden-sea-76731.herokuapp.com/
2. The client is running on Github pages -- https://marcynash.github.io/where-in-the-world-is-my-recipe/
3. There are buttons to sign up, sign in, change password and sign out. Once logged in you can list your recipes, add recipes, edit and delete recipes.


## For Where In The World Is My Recipe I built both the frontend client app and a backend server.

## Technology on the client uses

- HTML
- CSS and SASS
- Bootstrap
- Javascript
- Handlebars
- Ajax
- jQuery

## Technology on the server uses

- Rails
- Ruby
- Heroku

This project builds a recipe index entitled, "Where In The World Is That Recipe". I frequently find a recipe in a cookbook, magazine or online that I make and everyone loves.Weeks or months later someone says, "Hey, remember the <recipe> you made several weeks/months ago? Let's have it again." And I'm stuck because I don't remember where I found it.

This project started out as a way to organize recipes, but as I thought more about it and talked with my family, it seemed a great way to colloaraborate and share recipes.

Currently Where In The World Is My Recipe is a list of recipes, locations and comments. There are many ways to expand this project including --

1. Add tags to recipes for searching.
2. Add profile so that users can form groups and share and / or comment on each others recipes.
3. Add recipe ingredients and directions.
4. Create shopping lists from recipes.
5. Use Bootstrap for frontend.
6. Sort and search recipes, comments.
7. Add additional functionality for comments, tags and profiles, via a 'Manage' button or additional line in listbox.
8. At least 1 additional table to allow for multiple comments --Comment Table - comment_id, user_id, recipe_id, comment.

## User stories

As a cook, I would like to save a list of recipes with the cookbook name and page number.
As a cook, I would like to save the online link where I found a recipe.
As a cook, I would like to make notes about the recipes I'm saving.
As a cook, I would like to be able to create an account on and use the "Where In The World Is That Recipe" app.

## Issues I Encountered

1. Going from the wireframes to HTML is hard to visual at times as it's straight coding without an interactive gui
2. jQuery can be a challenge when getting and / or setting deep within the DOM.
3. I would like to delve deeper into Rails. Since I only had 2 tables the table relationships were minimal and code necessary to set up and accomplish was also minimal.


## Design and planning details

## Tables and columns

User Table - with columns user_id, email address
Recipe Table - with columns recipe_id, name, book_or_url, cookbook_name_or_url, comments

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your tables are related to one another.
(one to many, many to many, ect).

User Table -|-----< Recipe Table          A user has many recipes

<!-- Recipe Table -|----< Comment Table        A recipe has many comments -->

## Routing

What routes will you need to be able to make the proper request to your API?

  post '/sign-up' => 'users#signup'
  post '/sign-in' => 'users#signin'
  delete '/sign-out/:id' => 'users#signout'
  patch '/change-password/:id' => 'users#changepw'

  resources :recipes, except: [:new, :edit]
  resources :comments, except: [:new, :edit, :destroy]

## Wireframes

Please create a wireframe of your planned front end.

http://imgur.com/OQGyzf2
http://imgur.com/NVWU8Qa
http://imgur.com/ohfddUW


## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.

1. Authentication - generate scaffold, curl scripts, frontend            .5 days
2. Recipes Table - generate scaffold, curl scripts, rails console        .5 days
3. Comments Table - generate scaffold, curl scripts, rails console       .5 days
4. Client                                                                 1 day
5. Additional Testing                                                    .5 days
6. Add redemption update / feature                                        1 day
7. Additional testing                                                    .5 days
