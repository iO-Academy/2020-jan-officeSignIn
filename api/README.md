# Office Signin Application

This application is built using Slim framework, OOP and the MVC structure.

## Setup

1. Clone repo
2. Run ```composer install``` in api directory
3. Create database with name ```maydenSignIn``` and either import template from db/ file or create your own with the following tables:
 - ```visitors``` with the following fields:
    - ```id``` : user id (auto generated)
    - ```Name``` : visitor name
    - ```Company``` : company the visitor is from
    - ```DateOfVisit``` : DATE format, date of visit
    - ```TimeOfSignIn``` : Time visitor signed in
    - ```TimeOfSignIn``` : Time visitor signed out
    - ```SignedIn``` : bool to say if signed in or out
    
 - ```admins``` with the following fields:
    - ```id``` : id (auto generated)
    - ```passcode``` : a hashed 4 digit passcode

4. Run ```composer start``` in the api directory

### Running Tests

- cd into the tests directory and run: ```../vendor/bin/phpunit .```
- or in the api directory run: ```composer test```

## Routes
- for local development use localhost:8080/whatYouRequire as your URL

**/api/visitorSignIn**

POST
- Logs a new visitor to DB
- Required
    - `Name` - visitor's first name 
- Optional
    - `Company` - company visitor represents
- Sends: 
  - `{ "Name": "string", "Company": "string" }`
- Returns:
    - if successful 
        - `status 200`
        - `{ "Success": true, "Message": "Visitor successfully logged", "Data": [] }`  
    - if unsuccessful
        - `status 400` 
            - `{ "Success": false, "Message": "Name is required", "Data": [] }`
        - `status 500` 
            - `{ "Success": false, "Message": "Unable to connect to server", "Data": [] }`
            
**/api/admin**
GET

You must be authenticated to retrieve data from this route.
To test, passcode is 8974.

- Gets all Visitors currently signed in
- Required
    - None
- Optional
    - None
    
- Returns:
    - if successful 
        - `status 200`
        - `{ "Success": true, "Message": "Successfully retrieved signed in visitors", "Data": [ { retrieved data } ] }`  
    - if unsuccessful
        - `status 400` 
            - `{ "Success": false, "Message": "No data retrieved or no data in database", "Data": [] }`
        - `status 500` 
            - `{ "Success": false, "Message": "Unable to connect to server", "Data": [] }`