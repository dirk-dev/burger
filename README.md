# Eat a Burger

## Summary
The user enters the burger(s) they would like to eat to the `Eat a Burger` app. The app does a `POST` of user input to a MySQL database and updates the screen to reflect any additions. There is also `schema.sql` & `seeds.sql` files to set up the database and add the initial values. 

Each item has a button that allows the user to chose a burger to 'devour'. Clicking that button triggers a `PUT`, which updates the values in the database to reflect that the burger has been eaten, and the screen is likewise updated.


## Technical Details
* This app makes use of the `Model-View-Controller (MVC)Architecture`. 
    * The `Model` contains the data that is created or updated. This data exists in a MySQL database, and is supplied in the form of `schema.sql` & `seeds.sql` files. A JavaScript file containing jQuery interacts with this data.
    * The `Views` component is all of the front-end code in the form of 2 `Handlebars` files which display the contents of the database onscreen.
    * The `Controller` component interacts with the `Model` (database) and `Views` (HTML front end). 


## Technologies used:
* Express npm package - https://www.npmjs.com/package/express  
* Google Fonts - https://fonts.google.com/
* Handlebars templating engine - https://handlebarsjs.com/
* JavaScript
* jQuery - http://jquery.com/
* MySQL Workbench - https://www.mysql.com/products/workbench/
* MAMP local server - https://www.mamp.info/en/
* Node.js - https://nodejs.org
* Twitter Bootstrap CSS framework - http://getbootstrap.com/