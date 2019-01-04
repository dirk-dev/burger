# Eat a Burger

## Summary
The user inputs the burger(s) they would like to eat to the `Eat a Burger` app. The app does a `POST` of user input to a MySQL database and updates the screen to reflect any additions. There is also `schema.sql` & `seeds.sql` files to set up the database and add the initial values. 

Each item has a button that allows the user to chose a burger to 'devour'. Clicking that button triggers a `PUT`, which updates the values in the database to reflect that the burger has been eaten, and the screen is updated to reflect this change.


## Technical Details
* This app makes use of the `Model-View-Controller (MVC)` Architecture. 
    * The `Model` contains the data that is created or updated. This data exists in a MySQL database, and is supplied in the form of `schema.sql` & `seeds.sql` files. A JavaScript file containing jQuery interacts with this data.
    * The `Views` component is all of the front-end code in the form of 2 Handlebars files which display the contents of the database onscreen.
    * The `Controller` component is the intermediary between the `Model` (database) and `Views` (HTML front end).
* jQuery is used to collect user input and pass it to the database, as well as reload the page, via AJAX calls.
* Handlebars is used to create the HTML views. The `main.handlebars` file contains the HTML including links to the stylesheets and jQuery library, as well as the handlebars `{{{body}}}` tag. The `index.handlebars` file contains the HTML body to display the complete webpage, including the buttons to change the burger state, the form for user input, and the handlebars tags for the database records. 

## How to Run the App

#### Setup - MySQL/MAMP
1. You will need to have a MySQL server running to use this app. MAMP is free software that runs a MySQL server on your local machine. Their URL can be found in the `Technologies Used` section below. Once you have a MySQL server running, take note of the `host`, `port`, `user` and `password` info on the server. On MAMP, this can be accessed clicking on the `open start page` icon on the MAMP app. 

2. Install and configure the MySQL database app. For `MySQL Workbench`, on the start screen, click on the add or edit icons next to `MySQL Connections` and check that the settings correspond to the MAMP settings. The password is normally `root`. Once the settings are entered, click the `Test Connection` button to confirm that the connection is working.  

#### Setup - Database:
1. Open the code for `schema.sql` (found in the `db` folder) in your text editor, copy it, and paste it into the Query window of `MySQL Workbench`.

2. Click the leftmost lightning-bolt icon (to the right of the disk icon), or select Query - Execute (All or Selection) in the Workbench menu. This will create the schema (skeleton) for the database.

3. Then click on the refresh icon at the top right side of the `SCHEMAS` panel to confirm that the database was created. It should be called burgers_db. Click on the dropdown arrows of the database and confirm that the database was created, and that it has a table named `burgers` with 3 of columns.

4. Delete the existing code and paste in the contents of the `seeds.sql` file. This will import the data into the database. Click the left-most lighting bolt and click the refresh. expand the tables, and select the product table. Three small black icons will appear to the right. Click the right-most one, which looks like a small spreadsheet with a lightning bolt in the corner. This will display a preview of the database structure. Confirm that the table was created. You can also check the Output window on the bottom for any error messages.

#### Setup - Node, NPM, and bamazonCustomer JavaScript file
1. If not installed already, download & install `Node.js` on your computer.

2. Copy the files to the directory you wish to run bamazon from. You will only need to copy the following files: `bamazon_schema.sql, bamazon_seeds.sql, bamazonCustomer,js, package-lock.json,` and `package.json`. The images folder is for the readme file and not needed.  

3. At the command line in the directory where the Bamazon files are located, type `npm i` - this will read the `package.json` file and install any needed packages. They will be installed into a node_modules folder.

4. Open `bamazonCustomer.js` in a text editor and change the connection info as needed to match the settings in your MySQL server and save it. 

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