# 2020 Jan - Micro Hippos - Mayden Academy Visitor sign in app
## What you need to use the app:

### Running the API:
-Create a MySQL database and import the SQL located in the DB folder within api directory

-To run the back-end api have composer running in your terminal run 'composer install' then 'composer start', after importing the DB you will need to run 'composer dump-autoload"

-Run the api on the port specified in the documentation in the api directory

-To run the tests go to the root directory (api) and run 'composer test' OR '../vendor/bin/phpunit .'

### Running the React app:
-To run the front-end React app you need npm running in a separate terminal window run the command 'npm start' (make sure you have npm installed on your machine)

-Run the app on the port specified in the documentation in the app directory

### Setting up the DataBase
- Create an SQL database called 'maydenSignIn' then import the 'maydenSignIn_2020-04-20.sql' from the db directory in the root of api.
